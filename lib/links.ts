export const APP_URL = 'https://app.socialcalcs.com'

/**
 * Mike's own live bio site — the real, working example we point visitors at.
 * Change the slug here and every "live example" link on the site follows.
 */
export const DEMO_URL = `${APP_URL}/mortgageman`

/**
 * A real, published calculator on Mike's account, served by the app's public
 * embed route. The marketing site frames it in the "Embed anywhere" section so
 * the demo IS the product. Keys are not secret — they ship in every customer's
 * embed snippet — but the widget must stay published + embed-enabled, and the
 * owning account must keep its Pro entitlement, or the route renders
 * "This calculator isn't available."
 */
export const EMBED_KEY = '80b34e37-99e6-4646-b828-4a57f5d80b9a'
export const EMBED_URL = `${APP_URL}/embed/${EMBED_KEY}`
