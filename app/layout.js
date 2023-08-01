"use client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import ogImage from "../public/assets/img/product/oxsys main product.png"

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
          content={ogImage}
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
          content="/assets/img/product/oxsys main product.png"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
