# Digital CV — Aqila Kresna Arrafi

A monochrome personal portfolio built with Next.js. The interface combines a documentation-style navigation shell with editorial section layouts for experience, projects, education, skills, achievements, and contact details.

## Edit portfolio content

All profile and CV content lives in:

```text
src/data/portfolio.ts
```

Update that file to change identity details, navigation labels, experience, projects, education, skills, achievements, social links, and search results. UI components consume the same data source automatically.

## Local development

```bash
npm install
npm run dev
```

Then open the local address printed by Next.js.

## Validation

```bash
npm run lint
npm run build
```

## Search visibility

The canonical website is `https://www.kresnarrafi.my.id/`, defined by
`WEBSITE_URL` in `src/data/portfolio.ts`. Metadata, social previews, the
`ProfilePage`/`Person` structured data, `robots.txt`, and `sitemap.xml` use this
address. The sitemap lists the homepage; section anchors are not separate pages.

After deploying these changes to Vercel:

1. Check that `/robots.txt` and `/sitemap.xml` both return HTTP 200 on the live
   domain, and that the homepage canonical points to the address above.
2. Set `www.kresnarrafi.my.id` as the primary domain in Vercel and redirect
   `kresnarrafi.my.id` to it. If older portfolio domains serve the same content,
   redirect them to the canonical domain where possible.
3. Add the `kresnarrafi.my.id` domain property in
   [Google Search Console](https://search.google.com/search-console) and verify
   ownership using the DNS TXT record provided by Google. Alternatively, add the
   exact `https://www.kresnarrafi.my.id/` URL-prefix property, choose HTML-tag
   verification, and set `GOOGLE_SITE_VERIFICATION` in Vercel to the tag's
   `content` value only, then redeploy before verifying.
4. Submit `https://www.kresnarrafi.my.id/sitemap.xml` under Sitemaps. Inspect the
   homepage URL, test the live URL, and request indexing. Check Google's selected
   canonical and indexing status after it has been processed.
5. Link to the canonical website from your LinkedIn profile and other profiles
   you own, using the same full name: Aqila Kresna Arrafi.

Search Console ownership cannot be verified with source code alone. Google
controls indexing and ranking; these changes do not guarantee first place.
See Google's [SEO starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
and [recrawling guidance](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl).
