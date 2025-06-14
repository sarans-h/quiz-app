// src/pages/_app.tsx
import { trpc } from '@/utils/trpc'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppType } from 'next/app'
import { useState } from 'react'
import { httpBatchLink } from "@trpc/client";

import '@/styles/globals.css' // or whatever styles you use

const MyApp: AppType = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient())

  const [trpcClient] = useState(() =>
  trpc.createClient({
    links: [
      httpBatchLink({
        url: "/api/trpc",
      }),
    ],
  })
);


  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </trpc.Provider>
  )
}

export default MyApp
