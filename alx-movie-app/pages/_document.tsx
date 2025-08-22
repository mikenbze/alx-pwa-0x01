// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Link the manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />

        {/* Theme color for Chrome, Android */}
        <meta name="theme-color" content="#FFFFFF" />

        {/* Apple touch icon */}
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/apple-icon-152x152.png"
        />

        {/* Microsoft tile */}
        <meta name="msapplication-TileImage" content="/icons/ms-icon-310x310.png" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
