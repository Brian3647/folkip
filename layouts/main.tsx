import Head from "next/head";
import { WebConfigs } from "../src/types";
import webconfig from "../src/webconfigs";

import styles from "../styles/globals.module.scss";

interface Props {
	children?: React.ReactNode;
	title?: WebConfigs["defaults"]["title"];
	description?: WebConfigs["defaults"]["description"];
}

export default function Layout({ children, title, description }: Props): JSX.Element {
	return (
		<>
			<Head>
				<title>{title ?? webconfig.defaults.title}</title>
				<meta property="og:title" content={title ?? webconfig.defaults.title} key="title" />
				<meta property="og:description" content={description ?? webconfig.defaults.description} />
			</Head>
			<div className={styles.web}>
				<div className={styles.content}>{children}</div>
			</div>
		</>
	);
}
