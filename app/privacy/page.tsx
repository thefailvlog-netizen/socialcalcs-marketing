import type { Metadata } from 'next'
import { LegalPage, Section, Callout, List } from '@/components/legal/legal-page'
import { LEGAL_ENTITY, BRAND } from '@/lib/company'

export const metadata: Metadata = {
  title: 'Privacy Policy — SocialCalcs',
  description: 'How SocialCalcs collects, uses, and protects personal information.',
}

const linkStyle = { color: 'var(--accent)', fontWeight: 600 } as const

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="July 16, 2026"
      intro={
        <>
          {BRAND} is a product of <strong>{LEGAL_ENTITY}</strong> (&ldquo;{BRAND}&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;), an Ontario corporation. {LEGAL_ENTITY} is the organization responsible for the personal
          information handled through {BRAND}. This policy explains what personal information we collect, why we
          collect it, who we share it with, and the choices you have. We handle personal information in accordance
          with Canada&apos;s Personal Information Protection and Electronic Documents Act (PIPEDA) and other
          applicable privacy law.
        </>
      }
    >
      <Section n={1} heading="Two kinds of information — and who is responsible">
        <p>This distinction matters, because it determines who you should contact about your information.</p>
        <Callout>
          <p style={{ margin: '0 0 10px' }}>
            <strong>Customer information</strong> — information about the professionals and businesses who sign up
            for SocialCalcs. We decide how this is handled, and this policy governs it.
          </p>
          <p style={{ margin: 0 }}>
            <strong>Lead information</strong> — information about people who visit a customer&apos;s bio site or run
            one of their calculators. <strong>We process this on our customer&apos;s behalf and on their
            instructions.</strong> The customer — the broker, agent, or advisor whose page you used — is the party
            responsible for it, and their own privacy policy governs what they do with it.
          </p>
        </Callout>
        <p>
          <strong>If you ran a calculator on someone&apos;s page and want your information accessed, corrected, or
          deleted, contact that professional directly.</strong> If you cannot reach them, contact us and we will
          make reasonable efforts to route your request or refer it to the responsible customer.
        </p>
      </Section>

      <Section n={2} heading="What we collect">
        <p>
          <strong>From our customers:</strong>
        </p>
        <List
          items={[
            'Account details — name, email address, password credentials, business or brokerage name, licence number, and any profile content you add such as a photo, links, or contact details.',
            'Billing information — plan, billing history, and the last four digits and card type. Full payment card numbers are handled directly by our payment processor and never reach our servers.',
            'Support communications — messages you send us.',
            'Usage and technical data — pages viewed, features used, approximate location derived from IP address, browser and device type, log data, and error reports.',
          ]}
        />
        <p style={{ marginTop: 4 }}>
          <strong>From Leads, on our customers&apos; behalf:</strong>
        </p>
        <List
          items={[
            'Contact details submitted to a calculator or form — typically name and email address, and phone number where requested.',
            'The figures entered into a calculator and the results generated, which are used to produce the report.',
            'Basic technical data about the visit.',
          ]}
        />
        <p>
          We do not ask for and do not want sensitive information such as government identifiers, Social Insurance
          Numbers, full financial account numbers, or health information. Our Terms prohibit customers from
          collecting it through the Service.
        </p>
      </Section>

      <Section n={3} heading="Why we collect it">
        <List
          items={[
            'To provide, operate, secure, and support the Service.',
            'To create and deliver the calculator reports our customers configure.',
            'To deliver leads and notifications to the customer they belong to.',
            'To process payments and manage subscriptions.',
            'To communicate about your account, security, and material changes to the Service.',
            'To detect, prevent, and investigate fraud, abuse, and technical problems.',
            'To understand and improve how the Service is used, using aggregated or de-identified data where practical.',
            'To meet legal, regulatory, and tax obligations.',
          ]}
        />
        <p>
          We do not sell personal information. We do not rent or trade it. We do not use Lead information to market
          our own products to Leads.
        </p>
      </Section>

      <Section n={4} heading="Consent">
        <p>
          We collect, use, and disclose personal information with consent, except where law permits or requires
          otherwise. By creating an account you consent to this policy. Where a Lead submits information through a
          customer&apos;s calculator, that consent is obtained by the customer, who is responsible for having a valid
          basis to collect it and to have us process it.
        </p>
        <p>
          You may withdraw consent at any time, subject to legal and contractual limits and reasonable notice.
          Withdrawing consent may mean we can no longer provide the Service to you.
        </p>
      </Section>

      <Section n={5} heading="Email and anti-spam">
        <p>
          We send transactional messages — account, billing, security, and service notices — which are necessary to
          operate the Service. We may send occasional product or marketing email to customers; every such message
          includes an unsubscribe link, and unsubscribing does not affect transactional messages.
        </p>
        <p>
          Reports and notifications generated through a customer&apos;s calculator are sent on that customer&apos;s
          behalf and are their commercial electronic messages. Under our Terms, the customer is responsible for
          compliance with Canada&apos;s Anti-Spam Legislation (CASL), including consent and unsubscribe handling, for
          any message sent to their Leads.
        </p>
      </Section>

      <Section n={6} heading="Service providers we share information with">
        <p>
          We share personal information with providers who perform services for us, only as needed, and under
          contracts requiring them to protect it and use it solely for the services they provide us:
        </p>
        <List
          items={[
            <>
              <strong>Supabase</strong> — database, authentication, and file storage.
            </>,
            <>
              <strong>Vercel</strong> — application hosting and content delivery.
            </>,
            <>
              <strong>Stripe</strong> — payment processing. Stripe handles card data directly under its own privacy
              policy.
            </>,
            <>
              <strong>Resend</strong> — transactional and report email delivery.
            </>,
            <>
              <strong>Upstash</strong> — rate limiting and caching, to protect the Service from abuse.
            </>,
            <>
              <strong>Google Analytics</strong> — aggregated website usage measurement on our marketing
              site. It sets cookies and receives your IP address, pages viewed, and general device
              information. It is not used on customer bio sites, and we do not use it to identify you or
              to build advertising profiles.
            </>,
          ]}
        />
        <p>We may also disclose personal information where we reasonably believe it is necessary to:</p>
        <List
          items={[
            'Comply with applicable law, a subpoena, warrant, court order, or lawful request from a public authority.',
            'Enforce our Terms or investigate a suspected breach.',
            'Protect the rights, property, or safety of SocialCalcs, our customers, or the public.',
            'Complete a merger, financing, acquisition, or sale of assets — in which case personal information may be transferred, subject to this policy or a successor policy with comparable protection.',
          ]}
        />
      </Section>

      <Section n={7} heading="Where information is stored and processed">
        <Callout>
          <strong>
            Your personal information is stored and processed on servers located outside Canada, primarily in the
            United States.
          </strong>{' '}
          While it is in another country, it is subject to that country&apos;s laws, and may be accessible to courts,
          law enforcement, and national security authorities there under a lawful order. By using the Service, you
          consent to this transfer and processing.
        </Callout>
        <p>
          We use providers that offer contractual and technical protections comparable to those required in Canada.
          You can ask our Privacy Officer for more information about our practices for cross-border handling.
        </p>
      </Section>

      <Section n={8} heading="Cookies and similar technologies">
        <p>
          We use cookies and similar technologies that are necessary to operate the Service — keeping you signed in,
          maintaining your session, remembering preferences, and protecting against abuse. You can block or delete
          cookies in your browser, but some features, including signing in, will not work without them.
        </p>
        <p>
          On our marketing site we also use <strong>Google Analytics</strong> to measure aggregated traffic — which
          pages people visit and how they arrive. It sets cookies and processes your IP address and device
          information on Google&apos;s servers. We use it to understand what is working, not to identify individual
          people or to serve advertising.
        </p>
        <p>
          You can opt out of Google Analytics on every site you visit using Google&apos;s{' '}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            browser opt-out add-on
          </a>
          , or by blocking cookies in your browser. Analytics is not used on customer bio sites or calculators.
        </p>
      </Section>

      <Section n={9} heading="Security">
        <p>
          We use safeguards appropriate to the sensitivity of the information, including encryption in transit,
          access controls, credential hashing, database-level access rules, and rate limiting. We restrict access to
          personal information to those who need it to do their jobs.
        </p>
        <p>
          No method of transmission or storage is completely secure, and we cannot guarantee absolute security. If we
          become aware of a breach of security safeguards that creates a real risk of significant harm, we will
          report and notify as required by law.
        </p>
      </Section>

      <Section n={10} heading="How long we keep it">
        <p>
          We keep personal information only as long as needed for the purposes described here, or as required by law.
          Account information is retained while your account is active and for a reasonable period afterward.
          Following account closure we delete or de-identify customer and Lead information within a reasonable
          period, except where we must retain records — for example billing and tax records — for longer. Backups are
          purged on a rolling schedule.
        </p>
      </Section>

      <Section n={11} heading="Your rights">
        <p>Subject to legal limits, you may:</p>
        <List
          items={[
            'Ask what personal information we hold about you and how we have used and disclosed it.',
            'Ask us to correct information that is inaccurate or incomplete.',
            'Ask us to delete information, where we are not required to keep it.',
            'Withdraw consent, subject to legal and contractual restrictions and reasonable notice.',
            'Ask questions or make a complaint about how we handle personal information.',
          ]}
        />
        <p>
          Contact our Privacy Officer using the details below. We will respond within 30 days, or tell you if we need
          more time. There is normally no charge. We may need to verify your identity before acting.
        </p>
        <p>
          If you are not satisfied with our response, you may contact the Office of the Privacy Commissioner of
          Canada at{' '}
          <a href="https://www.priv.gc.ca" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            priv.gc.ca
          </a>
          .
        </p>
      </Section>

      <Section n={12} heading="Children">
        <p>
          The Service is for business use by adults. It is not directed at children, and we do not knowingly collect
          personal information from anyone under 18. If you believe a child has provided us personal information,
          contact us and we will delete it.
        </p>
      </Section>

      <Section n={13} heading="Changes to this policy">
        <p>
          We may update this policy from time to time. The date at the top shows when it last changed. If we make a
          material change, we will take reasonable steps to notify you, such as by email or an in-app notice.
        </p>
      </Section>

      <Section n={14} heading="Contact our Privacy Officer">
        <p>
          Questions, requests, or complaints about privacy:{' '}
          <a href="mailto:support@socialcalcs.com" style={linkStyle}>
            support@socialcalcs.com
          </a>
          .
        </p>
        <p style={{ fontSize: 14 }}>Privacy Officer, {LEGAL_ENTITY}, Ontario, Canada.</p>
      </Section>
    </LegalPage>
  )
}
