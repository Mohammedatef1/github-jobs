// _app.jsx
import { ContextProvider } from "@/context/Context";
import queryClient from "@/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AppProps } from "next/app";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </ContextProvider>
    </QueryClientProvider>
  );
}
