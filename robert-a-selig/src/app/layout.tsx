import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <link
        rel='icon'
        href='/w3rShieldLogo.ico'
        type='image/w3rShieldLogo.ico'
        //  sizes='<generated>'
      />
      <title>Dr. Robert A. Selig, PhD.</title>
      <body>{children}</body>
    </html>
  );
}
