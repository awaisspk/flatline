import '../styles/global.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';

const client = new QueryClient();
const MyApp = ({ Component, pageProps }: AppProps) => {
  // @ts-ignore
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <QueryClientProvider client={client}>
      {getLayout(<Component {...pageProps} />)}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default MyApp;
