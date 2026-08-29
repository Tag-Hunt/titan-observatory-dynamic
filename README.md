# titan-observatory-dynamic

Titan Observatory's public website, built with Next.js, React, and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

## Deploy Notes
Use Node 20.9 or newer. Configure optional external integrations through
environment variables, then run `npm run build` and `npm start`.

The contact form proxies submissions to the Titan Platform API, which owns
validation, persistent throttling, submission storage, and Resend delivery.
Set `PLATFORM_API_BASE_URL` only when targeting a non-production Platform API.
