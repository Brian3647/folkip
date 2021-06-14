import "../styles/globals.scss";

import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";

import React from "react";

function App({ Component, pageProps }: AppProps): JSX.Element {
	return <Component {...pageProps} />;
}

export default App;
