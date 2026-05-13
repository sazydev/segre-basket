import "./globals.css";

export const metadata = {
  title: "Segré Basket",
  description: "Club de basketball de Segré",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=Barlow+Condensed:wght@400;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}