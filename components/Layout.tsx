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
				<link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />
				<div className="min-h-screen flex flex-row bg-gray-200">
					<div className="flex flex-col w-56 bg-gray-800 rounded-r-3xl overflow-hidden">
						<div className="flex items-center justify-center h-20 shadow-md">
							<h1 className="text-3xl uppercase text-indigo-500">Folkip</h1>
						</div>
						<ul className="flex flex-col py-4">
							<li>
								<a
									href="#"
									className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
								>
									<span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
										<i className="bx bx-home"></i>
									</span>
									<span className="text-sm font-medium">Home</span>
								</a>
							</li>
							<li>
								<a
									href="#"
									className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
								>
									<span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
										<i className="bx bx-music"></i>
									</span>
									<span className="text-sm font-medium">Music</span>
								</a>
							</li>
							<li>
								<a
									href="#"
									className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
								>
									<span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
										<i className="bx bx-chat"></i>
									</span>
									<span className="text-sm font-medium">Chat</span>
								</a>
							</li>
							<li>
								<a
									href="#"
									className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
								>
									<span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
										<i className="bx bx-user"></i>
									</span>
									<span className="text-sm font-medium">Profile</span>
								</a>
							</li>
							<li>
								<a
									href="#"
									className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
								>
									<span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
										<i className="bx bx-bell"></i>
									</span>
									<span className="text-sm font-medium">Notifications</span>
									<span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">
										5
									</span>
								</a>
							</li>
							<li>
								<a
									href="#"
									className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
								>
									<span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
										<i className="bx bx-log-out"></i>
									</span>
									<span className="text-sm font-medium">Logout</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className={styles.content}>{children}</div>
			</div>
		</>
	);
};
