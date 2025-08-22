// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Theme color for Android Chrome */}
        <meta name="theme-color" content="#FFFFFF" />

        {/* Preload PWA icons for faster load */}
        <link
          rel="preload"
          as="image"
          href="/icons/android-chrome-192x192.png"
          type="image/png"
        />
        <link
          rel="preload"
          as="image"
          href="/icons/android-chrome-512x512.png"
          type="image/png"
        />
        <link
          rel="preload"
          as="image"
          href="/icons/apple-icon-152x152.png"
          type="image/png"
        />
        <link
          rel="preload"
          as="image"
          href="/icons/ms-icon-310x310.png"
          type="image/png"
        />

        {/* Apple touch icon */}
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/apple-icon-152x152.png"
        />

        {/* Microsoft tile */}
        <meta name="msapplication-TileImage" content="/icons/ms-icon-310x310.png" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />

        {/* Optional favicon */}
        <link rel="icon" href="/icons/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/icons/favicon-16x16.png" sizes="16x16" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
