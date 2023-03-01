import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'

import '../app/assets/styles/globals.scss'

const quryCliend = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={quryCliend}>
			<Component {...pageProps} />
		</QueryClientProvider>
	)
}

export default MyApp
