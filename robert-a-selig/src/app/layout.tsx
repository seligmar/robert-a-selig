import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Dr. Robert A. Selig, PhD.</title>
      <body>
        {children}
      </body>
    </html>
  );
}
