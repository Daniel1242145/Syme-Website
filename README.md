# Syme Carpet Cleaning Website

Next.js and Tailwind CSS website for Syme Carpet Cleaning.

## Blog content

The Blog page lives at `/resources`.

Starter posts are stored in `lib/blog.ts`. To connect another publishing platform later, set `BLOG_CMS_URL` to a JSON feed that returns either:

```json
[
  {
    "slug": "example-post",
    "title": "Example post",
    "excerpt": "Short summary",
    "category": "Carpet Cleaning",
    "date": "2026-06-17",
    "readTime": "3 min read",
    "keywords": ["Carpet Cleaning Christchurch"],
    "sections": [
      {
        "heading": "Section heading",
        "body": "Section body"
      }
    ]
  }
]
```

or:

```json
{ "posts": [] }
```

The blog refreshes hourly on Vercel, so daily posts from a connected platform can appear without redesigning the site.
