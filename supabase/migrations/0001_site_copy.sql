create table if not exists site_copy (
  id uuid primary key default gen_random_uuid(),
  key text unique not null,
  value text not null,
  updated_at timestamptz not null default now()
);

-- Update timestamp automatically on edit
create or replace function update_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists site_copy_updated_at on site_copy;
create trigger site_copy_updated_at
  before update on site_copy
  for each row execute function update_updated_at();

-- RLS: anyone can read, only service role can write
alter table site_copy enable row level security;

create policy "public_read" on site_copy
  for select using (true);

create policy "service_write" on site_copy
  for all using (auth.role() = 'service_role');

-- Seed with default copy
insert into site_copy (key, value) values
  ('hero.eyebrow', 'Lead Engine for Financial Pros'),
  ('hero.headline', 'Turn your bio link into a lead machine.'),
  ('hero.subheadline', 'Branded microsites and calculators for mortgage brokers and real estate agents. Share once, capture leads forever.'),
  ('hero.cta_primary', 'Start Free'),
  ('hero.cta_secondary', 'See Demo'),
  ('howitworks.step1.title', 'Share your link'),
  ('howitworks.step1.description', 'Add your SocialCalcs link to your Instagram bio, LinkedIn profile, or email signature.'),
  ('howitworks.step2.title', 'Visitors use your calculator'),
  ('howitworks.step2.description', 'They enter their numbers into a branded calculator on your microsite — no app download needed.'),
  ('howitworks.step3.title', 'You get the lead'),
  ('howitworks.step3.description', 'The moment they hit calculate, their contact info lands in your dashboard and your inbox.'),
  ('features.card1.title', 'Branded Microsite'),
  ('features.card1.description', 'Your own page at socialcalcs.com/yourname. Logo, colors, bio, and contact info — yours.'),
  ('features.card2.title', 'Embedded Calculators'),
  ('features.card2.description', 'Mortgage, affordability, stress test, and more. Clients get instant answers; you get their details.'),
  ('features.card3.title', 'PDF Lead Magnet'),
  ('features.card3.description', 'Every calculation generates a branded PDF report. Clients email it to themselves — you capture the lead.'),
  ('features.card4.title', 'Lead Dashboard'),
  ('features.card4.description', 'Every lead in one place with the numbers they ran. Follow up with context, not cold calls.'),
  ('pricing.pro.price_monthly', '20'),
  ('pricing.pro.price_annual', '16'),
  ('pricing.business.price_monthly', '99'),
  ('pricing.business.price_annual', '79'),
  ('cta_banner.headline', 'Ready to turn followers into clients?'),
  ('cta_banner.subheadline', 'Join mortgage brokers and real estate agents already using SocialCalcs.'),
  ('cta_banner.cta', 'Start Free — No credit card required')
on conflict (key) do nothing;
