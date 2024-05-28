import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Octopus',
  description: 'Um amigo do trabalhador independente. Você é um freelancer? Com oito tentáculos, o Octopus pode te ajudar!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <body className={`${inter.className} bg-[#fcfcfc]`}>{children}</body>
    </html>
  );
}
