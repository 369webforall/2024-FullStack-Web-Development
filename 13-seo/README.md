## SEO Video

[From Youtube- SEO video](https://www.youtube.com/watch?v=a2ovCcxXqNo)

## Class Recording

[SEO-nextjs, google search console](https://youtu.be/dbH1E-fEwH8)

## Tools

[socialsharepreview](https://socialsharepreview.com/)

## Next.js 14 - SEO & Metadata Tutorial

1. Setting Up Metadata in the app/ Directory

In Next.js 14, metadata is handled natively through the app/ directory. You can add metadata for individual pages using the metadata field.

Step 1: Create a Page with Metadata

Inside your page file, define the metadata object, which can include properties like title, description, keywords, robots, etc.

Example

```ts
// app/page.tsx
export const metadata = {
  metadataBase:new URL("https://example.com/")
  //title: "My Amazing Page",
title:{
default:"Dev App - Hangout for developer",
template:"%s | Dev App - Hangout for developer "
},
  description: "This is a detailed description of the amazing page.",
  keywords: "amazing, page, seo",
  robots: "index, follow",
};

export default function HomePage() {
  return (
    <main>
      <h1>Welcome to My Amazing Page</h1>
    </main>
  );
}
```

Step 2: Add Metadata for the Layout

You can also define metadata for your layout, which applies to all pages nested under that layout.

```ts
// app/layout.tsx

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

- This metadata will automatically render as meta tags in the head section of the HTML.

2. Open Graph and Twitter Meta Tags

To further optimize for social media platforms, you can add Open Graph and Twitter metadata.

```ts
// app/page.tsx
export const metadata = {
  title: "My Amazing Page",
  description: "This is a detailed description of the amazing page.",
  openGraph: {
    title: "My Amazing Page",
    description: "This is a detailed description of the amazing page.",
    url: "https://example.com/amazing",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://example.com/image.jpg",
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@username",
    title: "My Amazing Page",
    description: "This is a detailed description of the amazing page.",
    image: "https://example.com/image.jpg",
  },
};
```

3. Dynamic Metadata with Functions

If you want to generate metadata dynamically, you can define a function that returns metadata. This is useful for pages with dynamic content.

```ts
// app/product/[id]/page.tsx
export async function generateMetadata({ params }) {
  const product = await fetchProduct(params.id);

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      images: [{ url: product.imageUrl }],
    },
  };
}

export default function ProductPage({ params }) {
  return <div>{/* Product page content */}</div>;
}
```

4. Handling Global SEO Settings

Global SEO settings, such as the default site title or canonical URL, can be added in the layout.tsx file for your entire app.

```ts
// app/layout.tsx
export const metadata = {
  title: {
    default: "My Website",
    template: "%s | My Website", // Applies to every page
  },
  description: "The default description for my website",
  openGraph: {
    siteName: "My Website",
    url: "https://example.com",
  },
};
```

5. Managing Robots Meta Tags

You can control how search engines index and crawl your pages using the robots meta tag.

```ts
// app/page.tsx
export const metadata = {
  robots: "noindex, nofollow", // Prevent indexing and following links
};
```

6. Favicons and Icons

Next.js 14 allows you to define favicons and app icons easily through the metadata API.

```ts
// app/layout.tsx
export const metadata = {
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};
```

7. Generating Sitemap for SEO

For large websites, generating a sitemap is essential for SEO. You can easily create one using a simple API route.

Step 1: Create an API Route for Sitemap

```ts
// pages/api/sitemap.ts
export default async function handler(req, res) {
  const urls = await getAllPageUrls();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map((url) => {
        return `
          <url>
            <loc>${url}</loc>
            <changefreq>daily</changefreq>
            <priority>0.8</priority>
          </url>
        `;
      })
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}
```

### robots.ts

```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://acme.com/sitemap.xml",
  };
}
```

## Google search console

[Google search console]()
