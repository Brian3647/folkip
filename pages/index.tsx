import webconfigs from "../src/webconfigs";
import "../styles/Home/index.module.scss";

export default function Home(): JSX.Element {
	return (
		<>
			{/* Top navbar section */}

			<nav className="flex flex-col content-center w-full px-6 py-2 font-sans text-center bg-gray-800 shadow sm:flex-row sm:text-left sm:justify-between sm:items-baseline">
				<div className="flex flex-row mb-2 sm:mb-0">
					<div className="self-center w-10 h-10 mr-2"></div>
					<div>
						<a
							href=""
							className="font-sans text-3xl font-bold text-transparent no-underline hover:text-blue-dark from-green-500 bg-clip-text to-blue-500 bg-gradient-to-r"
						>
							{webconfigs.defaults.title}
						</a>
					</div>
				</div>

				<div className="self-center sm:mb-0">
					<a
						href="/login"
						className="text-md no-underline text-gray-100 hover:text-green-500 ml-2 px-1"
					>
						Login
					</a>
					<a href="#" className="text-md no-underline text-gray-100 hover:text-green-500 ml-2 px-1">
						Sign in
					</a>
				</div>
			</nav>

			{/* Card section */}

			<div className="m-2 mx-auto p-16 sm:p-24 bg-gray-200">
				<div
					className="relative rounded-lg block md:flex items-center bg-gray-100 shadow"
					style={{ minHeight: "19rem" }}
				>
					<div
						className="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg"
						style={{ minHeight: "19rem" }}
					>
						<div className="absolute insent-0 w-full h-full bg-gray-800 opacity-75"></div>
						<div className="absolute insent-0 w-full h-full flex items-center justify-center fill-current text-white">
							<p className="font-mono font-semibold text-7xl">About</p>
						</div>
					</div>
					<div className="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
						<div className="p-12 md:pr-24 md:pl-16 md:py-12">
							<p className="text-gray-600 text-xl">Folkip is a Web aplication to connect people that Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi sed corporis laboriosam rem nemo eveniet dolorum quae qui culpa sequi, explicabo illo ea repellat harum aliquam pariatur reiciendis excepturi. Voluptatibus?</p>
						</div>
						<svg
							className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12"
							viewBox="0 0 100 100"
							preserveAspectRatio="none"
						>
							<polygon points="50,0 100,0 50,100 0,100"></polygon>
						</svg>
					</div>
				</div>
			</div>
		</>
	);
}

//TODO: add the carousel section to the page
//change the color to the buttons of login and sign in
//add the register page also
//finish the home before everything.
                                                                    