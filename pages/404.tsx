const customError = (): JSX.Element => {
	return (
		<>
			<div className="h-screen w-screen bg-gray-800 flex justify-center content-center flex-wrap">
				<p className="font-sans text-white error-text text-9xl">404 not found</p>
			</div>
			<div className="absolute w-screen bottom-0 mb-6 text-white text-center font-sans text-xl">
				<span className="opacity-50">Take me back to </span>
				<a className="border-b" href="/">
					Home
				</a>
			</div>
		</>
	);
};

export default customError;
