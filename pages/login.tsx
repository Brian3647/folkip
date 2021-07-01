import webconfigs from "../src/webconfigs";

export default function SignIn(): JSX.Element {
	const currentYear: number = new Date().getFullYear();
	return (
		<div className="min-h-screen pt-24 pb-5 font-sans antialiased bg-gray-800">
			<div className="flex flex-col justify-center mx-5 mb-5 space-y-8 sm:w-96 sm:m-auto">
				<h1 className="text-5xl font-bold text-center text-transparent uppercase from-green-500 bg-clip-text to-blue-500 bg-gradient-to-r">
					{webconfigs.defaults.title}
				</h1>
				<form action="#">
					<div className="flex flex-col p-10 space-y-6 bg-white rounded-lg">
						<h1 className="text-xl font-bold text-center">Sign in to your account</h1>
						<div className="flex flex-col space-y-1">
							<input
								type="text"
								name="username"
								id="username"
								className="w-full px-3 py-2 border-2 rounded focus:outline-none focus:border-blue-400 focus:shadow"
								placeholder="Username"
							/>
						</div>

						<div className="flex flex-col space-y-1">
							<input
								type="password"
								name="password"
								id="password"
								className="w-full px-3 py-2 border-2 rounded focus:outline-none focus:border-blue-400 focus:shadow"
								placeholder="Password"
							/>
						</div>

						<div className="relative">
							<input
								type="checkbox"
								name="remember"
								id="remember"
								className="inline-block align-middle"
							/>
							<label className="inline-block align-middle" htmlFor="remember">
								Remember me
							</label>
						</div>

						<div className="flex flex-col-reverse items-center sm:flex-row sm:justify-between">
							<a
								href="#"
								className="inline-block text-blue-500 hover:text-blue-800 hover:underline"
							>
								Forgot your password?
							</a>
							<button
								type="submit"
								className="px-5 py-2 font-bold text-white transition-colors bg-blue-500 rounded shadow focus:outline-none hover:bg-blue-700"
							>
								<a href="/index2">
									Login
								</a>
							</button>
						</div>
					</div>
				</form>
				<div className="flex justify-center text-sm text-gray-500">
					<p>&copy; Folkip {currentYear}. All right reserved.</p>
				</div>
			</div>
		</div>
	);
}


