import './globals.css';
import { Inter } from 'next/font/google';
import Head from './head';
import Footer from './footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Yasetai TECH Blog',
  description: '技術ブログ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin=''/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Darumadrop+One&display=swap" rel="stylesheet" />
      </head>

      <body className="h-full">
        <div className='grid grid-rows-[120px_minmax(800px,_1fr)_75px]'>
          <Head></Head>
          {children}
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
