import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ReactNode } from 'react';
import { Suspense } from 'react';
import ScrollToTopButton from '@/components/atoms/ScrollToTopButton';

import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Dog Breed Gallery',
    description: 'A gallery of dog breeds',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                {/* 使用 Suspense 包裹 children，確保錯誤邊界和錯誤處理 */}
                {/* https://github.com/vercel/next.js/discussions/61654 */}
                <Suspense>{children}</Suspense>
                <ScrollToTopButton />
            </body>
        </html>
    );
}
