import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'Dashboard app created using Next.js.',
  metadataBase: new URL(
    'https://dashboard-git-main-ritik-prajapats-projects.vercel.app/',
  ),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} anatialiased`}>{children}</body>
    </html>
  );
}
