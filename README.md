# Syme Cleaning website

Production-ready Next.js website for Syme Cleaning. The quote form sends enquiries through Formspree.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy with GitHub and Vercel

1. Create a new empty GitHub repository.
2. Upload all files from this project, including the `app` and `public` folders.
3. In Vercel, choose **Add New → Project**, import the GitHub repository and select **Deploy**.
4. In the Vercel project, open **Settings → Domains** and add `symecleaning.co.nz`.
5. Add the DNS records Vercel displays at the company that manages the domain.

The Formspree endpoint is already configured in `app/quote-form.tsx`.
