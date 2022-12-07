import '../styles/globals.css';
import type {AppProps} from 'next/app';
import Head from "next/head";

export default function App({Component, pageProps}: AppProps): JSX.Element {
    return <div>
        <Head>
            <title>Create Next</title>
            <link key={1} rel="icon" href="/favicon2.ico"/>
        </Head>
        <Component {...pageProps} />
    </div>;
}
