"use client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>OXSYS | Economical Reliable Performing</title>
        <meta name="robots" content="follow, index" />
        <meta
          name="description"
          content="A Product of SuVi Enterprises - Medical Equipments Manufacturer and Supplier"
        />
        <meta property="og:url" content="https://www.oxsys.in/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="OXSYS | Economical Reliable Performing"
        />
        <meta
          property="og:description"
          content="A Product of SuVi Enterprises - Medical Equipments Manufacturer and Supplier"
        />
        <meta
          property="og:title"
          content="OXSYS | Economical Reliable Performing"
        />
        <meta
          property="og:image"
          content={`https://oxsys-in.vercel.app/assets/img/product/oxsys%20main%20product.png`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="OXSYS | Economical Reliable Performing"
        />
        <meta
          name="twitter:description"
          content="A Product of SuVi Enterprises - Medical Equipments Manufacturer and Supplier"
        />
        <meta
          name="twitter:image"
          content={`https://oxsys-in.vercel.app/assets/img/product/oxsys%20main%20product.png`}

        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DZ612VHRQ9"></script>
        <script dangerouslySetInnerHTML={{
          __html: `   window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-DZ612VHRQ9');`
        }}>

        </script>
      </head>
      <body>{children}</body>
    </html>
  );
}
