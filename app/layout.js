"use client"
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Oxsys </title>
      </head>
      <body>{children}</body>
    </html>
  )
}
