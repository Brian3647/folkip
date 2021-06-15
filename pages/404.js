const Custom404 = () => {
	return (
		<>
			<div class="h-screen w-screen bg-gray-800 flex justify-center content-center flex-wrap">
				<p class="font-sans text-white error-text text-9xl">404</p>
			</div>
			<div class="absolute w-screen bottom-0 mb-6 text-white text-center font-sans text-xl">
				<span class="opacity-50">Take me back to </span>
				<a class="border-b" href="/">
					Home
				</a>
			</div>
		</>
	);
};

export default Custom404;
