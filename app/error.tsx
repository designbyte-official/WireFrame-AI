'use client'; // Error boundaries must be Client Components

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-zinc-950 text-white p-6">
      <div className="flex w-full max-w-md flex-col items-center justify-center gap-6 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10">
          <AlertTriangle className="h-10 w-10 text-red-500" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">Something went wrong!</h2>
          <p className="text-sm text-zinc-400">
            An unexpected error occurred. We've been notified and are looking into it.
          </p>
        </div>
        <div className="flex w-full gap-2">
           <Button
            variant="outline"
            className="w-full bg-zinc-900 text-zinc-300 hover:text-white border-zinc-800"
            onClick={() => window.location.href = '/'}
          >
            Go Home
          </Button>
          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => reset()}
          >
            Try again
          </Button>
        </div>
      </div>
    </div>
  );
}
