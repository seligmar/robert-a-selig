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
        href='/W3rShieldLogo.ico'
        type='image/W3rShieldLogo.ico'
      //  sizes='<generated>'
      />
      <title>Dr. Robert A. Selig, PhD.</title>
      <body>{children}</body>
    </html>
  );
}
