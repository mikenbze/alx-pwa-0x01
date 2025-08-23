// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/apolloClient";
import Layout from "@/components/layout/Layout";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </ErrorBoundary>
  );
}
