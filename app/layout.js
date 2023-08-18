"use client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>OXSYS | Compact Medical Oxygen Generators</title>
        <meta name="robots" content="follow, index" />
        <meta
          name="description"
          content="Founded in 2021, OXSYS excels in Oxygen generation through modular PSA technology. 70% self-manufactured, strong supply chain, medical Oxygen expertise."
        />
        <meta property="og:url" content="https://www.oxsys.in/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="OXSYSn | Compact Medical Oxygen Generators"
        />
        <meta
          property="og:description"
          content="Founded in 2021, OXSYS excels in Oxygen generation through modular PSA technology. 70% self-manufactured, strong supply chain, medical Oxygen expertise."
        />
        <meta
          property="og:title"
          content="OXSYS | Compact Medical Oxygen Generators"
        />
        <meta
          property="og:image"
          content={`https://www.oxsys.in/assets/img/product/oxsys-main-product.png`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="OXSYS | Compact Medical Oxygen Generators"
        />
        <meta
          name="twitter:description"
          content="Founded in 2021, OXSYS excels in Oxygen generation through modular PSA technology. 70% self-manufactured, strong supply chain, medical Oxygen expertise."
        />
        <meta
          name="twitter:image"
          content={`https://www.oxsys.in/assets/img/product/oxsys-main-product.png`}

        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DZ612VHRQ9"></script>
        <script dangerouslySetInnerHTML={{
          __html: `   window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-DZ612VHRQ9');`
        }}>
        </script>

        {/* 
        <script dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);    })(window, document, "clarity", "script", "idfn8e2cog");`
        }}>

        </script> */}
      </head>
      <body>{children}</body>
    </html>
  );
}
