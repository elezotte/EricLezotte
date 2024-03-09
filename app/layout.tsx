import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Nav from 'components/common/nav/Nav';
import theme from 'components/theme/theme';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EricLezotte.com",
  description: "I'm a Lead / Senior Front-End Developer with training in fine arts and engineering. I have a passion for creating pixel-perfect experiences and unique visuals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://ericlezotte.com" />
        <link rel="icon" type="image/png" href="./favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,500;0,700;1,100;1,300;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Nav>
              {children}
            </Nav>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
