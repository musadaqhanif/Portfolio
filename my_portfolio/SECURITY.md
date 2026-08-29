# Security

## What happened

Visitors to this site were being redirected to third-party trading and
advertising pages (`market-qx.trade`, `tq.wave-72ca.info` and similar).

**The site was not hacked, and there was no SQL injection.** There is no
database, no server-side login and no user input that reaches a query, so
neither was possible here.

The cause was a single line inherited from the public template this project was
started from, in `src/pages/_document.js`:

```html
<script defer src="https://analytics.dwiwijaya.com/script.js" data-website-id="..."/>
```

That tag told every visitor's browser to download and execute JavaScript from
`analytics.dwiwijaya.com` — a domain belonging to the template's original
author, not to us. It was committed in the very first bulk commit
(`435aa80 "Add my_portfolio files directly to repository"`), so it shipped with
the template and was never noticed.

A `<script src>` is a standing grant of full permission. Whatever that host
returns, the browser runs — with access to the page, its cookies, its forms and
`window.location`. When that host began serving redirect/ad code instead of
analytics, our site began redirecting, without a single line of our code
changing. Nothing was compromised on Vercel or in this repository.

This class of problem is a **supply-chain issue**, and it is the most common way
a static site starts behaving maliciously.

## What was changed

1. **The third-party script tag was removed.** The site now loads **zero**
   third-party JavaScript. Verified against the build output: no
   `<script src="https://...">` exists in any generated page.

2. **A Content-Security-Policy was added** (`next.config.js` → `headers()`).
   The directive that matters:

   ```
   script-src 'self' 'unsafe-inline'
   ```

   The browser will now **refuse to execute JavaScript from any other origin**,
   even if such a tag is reintroduced by accident. This is the actual guarantee
   that the incident cannot repeat — it does not depend on anyone remembering.

   Also set: `base-uri 'self'` (blocks `<base>` hijacking), `object-src 'none'`,
   `frame-ancestors 'none'` (clickjacking), `form-action 'self'` (a stolen form
   cannot POST your visitors' data elsewhere), plus `Strict-Transport-Security`,
   `Permissions-Policy`, `X-Content-Type-Options` and `Referrer-Policy`.

   `'unsafe-inline'` is still required because the Pages Router emits inline
   bootstrap scripts without a nonce. It permits inline code but **not** remote
   code, so the vector that caused this incident stays closed.

3. **Analytics is now opt-in and self-owned.** `NEXT_PUBLIC_ANALYTICS_SRC` is
   read by *both* `_document.js` and the CSP builder in `next.config.js`, so a
   script tag and its CSP allowance can never drift apart. Unset means no script
   and no allowed origin.

4. **Security headers live in exactly one place** — `next.config.js`. They were
   previously duplicated in `vercel.json` and `netlify.toml`. Two CSP headers
   are enforced as an *intersection*, not a union, which silently breaks pages.

5. **HTML is served `must-revalidate`**, and the service worker `cacheId` was
   bumped so caches created by the compromised build are orphaned and dropped.
   Returning visitors cannot be served a poisoned page from their own disk.

6. **Every other reference to a domain we do not own was removed** — the JSON-LD
   schema, share links, the sponsor button and the contact email template all
   pointed at the template author's domain. All site URLs now derive from
   `src/constants/site.js`.

## Verifying the fix

```bash
npm run build && npx next start -p 3000
```

```bash
curl -sI http://localhost:3000/ | grep -i content-security-policy
```

In the browser: open DevTools → Network → filter JS. Every script must be
served from your own origin. Nothing from any other domain should appear.

## Rules for this repository

- **Never add `<script src="...">` for a host you do not personally control.**
  If you need a third-party widget, add its origin to `script-src` deliberately,
  and understand you are handing that host the ability to run code for every
  visitor, permanently.
- Prefer self-hosting a vendored script over pointing at someone else's server.
- Anything prefixed `NEXT_PUBLIC_` is embedded in the client bundle and is
  public. Never put a private key behind that prefix.
- `.env.local` is gitignored and must stay that way. Do not paste real values
  into `.env.example`.

## Outstanding recommendation (needs action in a dashboard, not in code)

**Lock down EmailJS.** The contact form uses `NEXT_PUBLIC_EMAILJS_*` values,
which are public by design and readable in the bundle by anyone. Without a
domain restriction, a third party can send mail through your quota using them.

Go to EmailJS → Account → Security → enable **Allowed Domains** and list only
your own domains. A honeypot field was added to the form to absorb naive bots,
but it is not a substitute for that setting.
