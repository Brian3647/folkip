import Document, {
	Html,
	Main,
	NextScript,
	Head,
	DocumentContext as ctx,
	DocumentInitialProps as initProps
} from "next/document";

class Doc extends Document {
	static async getInitialProps(ctx: ctx): Promise<initProps> {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render(): JSX.Element {
		return (
			<Html>
				<Head>
					<meta property="og:title" content="Folkip" key="title" />
					{/*TODO: Add web description*/}
					<meta property="og:description" content="Hi!" />
				</Head>
				<body className="web">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default Doc;
