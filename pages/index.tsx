import Layout from "../layouts/main";
import "../styles/Home/index.module.scss";

export default function Home(): JSX.Element {
	return (
		<Layout>
			<div className="mt-10 ml-10 mr-10 text-4xl text-white bg-gray-800 row p-14 rounded-xl">
				<div className="ml-40 font-bold">
					<p>Welcome to Folkip!</p>
				</div>
			</div>
		</Layout>
	);
};

