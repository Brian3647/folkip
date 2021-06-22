import { useEffect, useState } from "react";
import Link from "next/link";
import { ReactState } from "../src/types";
import webconfigs from "../src/webconfigs";

function SideBar(): JSX.Element {
	const [notifications, setNotifications]: ReactState<number> = useState<number>(0);

	useEffect(() => {
		const notifications_storage: string | null = window.localStorage.getItem("notifications");
		const res_notifications: number = Number(notifications_storage) || 0;
		setNotifications(res_notifications);
	});

	return (
		<>
			<div
				className="flex flex-col w-56 pr-8 overflow-hidden bg-gray-800 rounded-r-xl pl-7"
				style={{ width: "17%" }}
			>
				<div className="flex items-center justify-center w-full h-20">
					<h1 className="text-3xl font-bold text-transparent uppercase from-green-500 bg-clip-text to-blue-500 bg-gradient-to-r">
						{webconfigs.defaults.title}
					</h1>
				</div>
				<ul className="flex flex-col py-4">
					<li>
						<a
							href="/"
							className="flex flex-row items-center h-12 text-gray-500 transition-transform duration-200 ease-in transform hover:translate-x-1 hover:text-white"
						>
							<span className="inline-flex items-center justify-center w-12 h-12 text-lg text-gray-400">
								<i className="bx bx-home"></i>
							</span>
							<span className="text-sm font-mediu">Home</span>
						</a>
					</li>
					<li>
						<a
							href="#"
							className="flex flex-row items-center h-12 text-gray-500 transition-transform duration-200 ease-in transform hover:translate-x-1 hover:text-white"
						>
							<span className="inline-flex items-center justify-center w-12 h-12 text-lg text-gray-400">
								<i className="bx bx-music"></i>
							</span>
							<span className="text-sm font-medium">Music</span>
						</a>
					</li>
					<li>
						<a
							href="#"
							className="flex flex-row items-center h-12 text-gray-500 transition-transform duration-200 ease-in transform hover:translate-x-1 hover:text-white"
						>
							<span className="inline-flex items-center justify-center w-12 h-12 text-lg text-gray-400">
								<i className="bx bx-chat"></i>
							</span>
							<span className="text-sm font-medium">Chat</span>
						</a>
					</li>
					<li>
						<a
							href="#"
							className="flex flex-row items-center h-12 text-gray-500 transition-transform duration-200 ease-in transform hover:translate-x-1 hover:text-white"
						>
							<span className="inline-flex items-center justify-center w-12 h-12 text-lg text-gray-400">
								<i className="bx bx-user"></i>
							</span>
							<span className="text-sm font-medium">Profile</span>
						</a>
					</li>
					<li>
						<a
							href="/notifications"
							className="flex flex-row items-center h-12 text-gray-500 transition-transform duration-200 ease-in transform hover:translate-x-1 hover:text-white"
						>
							<span className="inline-flex items-center justify-center w-12 h-12 text-lg text-gray-400">
								<i className="bx bx-bell"></i>
							</span>
							<span className="text-sm font-medium">Notifications</span>
							{notifications > 0 && (
								<span className="px-3 py-px ml-auto mr-6 text-sm text-red-500 bg-red-100 rounded-full">
									{notifications}
								</span>
							)}
						</a>
					</li>
					<li>
						<a
							href="/signIn"
							className="flex flex-row items-center h-12 text-gray-500 transition-transform duration-200 ease-in transform hover:translate-x-1 hover:text-white"
						>
							<span className="inline-flex items-center justify-center w-12 h-12 text-lg text-gray-400">
								<i className="bx bx-log-in"></i>
							</span>
							<span className="text-sm font-medium">Login</span>
						</a>
					</li>
					<li>
						<a
							href="#"
							className="flex flex-row items-center h-12 text-gray-500 transition-transform duration-200 ease-in transform hover:translate-x-1 hover:text-white"
						>
							<span className="inline-flex items-center justify-center w-12 h-12 text-lg text-gray-400">
								<i className="bx bx-log-out"></i>
							</span>
							<span className="text-sm font-medium">Logout</span>
						</a>
					</li>
				</ul>
			</div>{" "}
		</>
	);
};

export default SideBar;
