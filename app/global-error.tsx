'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { Button } from '@/components/ui/button';

const inter = Inter({ subsets: ['latin'] });

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen w-full flex-col items-center justify-center bg-zinc-950 text-white p-6">
          <div className="flex w-full max-w-md flex-col items-center justify-center gap-6 text-center">
            <h2 className="text-3xl font-bold">Fatal Error</h2>
            <p className="text-zinc-400">
              A critical error occurred that could not be recovered from. 
            </p>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => reset()}
            >
              Try again
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
