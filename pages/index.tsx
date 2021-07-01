import webconfigs from "../src/webconfigs";
import "../styles/Home/index.module.scss";

export default function Home(): JSX.Element {
	return (
		<>
			
			{/* Top navbar section */}

			<nav className="flex flex-col content-center w-full px-6 py-2 font-sans text-center bg-gray-800 shadow sm:flex-row sm:text-left sm:justify-between sm:items-baseline">
				<div className="flex flex-row mb-2 sm:mb-0">
					<div className="self-center w-10 h-10 mr-2">
					</div>
					<div>
						<a href="" className="font-sans text-3xl font-bold text-transparent no-underline hover:text-blue-dark from-green-500 bg-clip-text to-blue-500 bg-gradient-to-r">
							{webconfigs.defaults.title}
						</a>
					</div>
				</div>

				<div className="self-center sm:mb-0">
						<a href="/login" className="text-md no-underline text-gray-100 hover:text-green-500 ml-2 px-1">Login</a>
						<a href="#" className="text-md no-underline text-gray-100 hover:text-green-500 ml-2 px-1">Sign in</a>
					</div>
			</nav>

			{/* Carousel section */}

			<div className="text-center p-5 text-6xl font-sans font-bold">
				<p>hello world</p>
			</div>

		</>
	);
};

//TODO: add the carousel section to the page
//change the color to the buttons of login and sign in
//add the register page also
//finish the home before everything.
