
const DarkMode = (): JSX.Element => {
	if (
		localStorage.theme === "dark" ||
		(!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
	) {
		document.documentElement.classList.add("dark");
	} else {
		document.documentElement.classList.remove("dark");
	}

	localStorage.theme = "light";

	localStorage.theme = "dark";

	return (
		<div className="bg-white dark:bg-gray-800">
			<h1 className="text-gray-900 dark:text-white">Dark mode is here!</h1>
			<p className="text-gray-600 dark:text-gray-300">Lorem ipsum...</p>
		</div>
	);
};

export default DarkMode;
