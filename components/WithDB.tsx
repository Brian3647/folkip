import { useEffect } from "react";

function WithDB({ children }: { children: React.ReactNode }): JSX.Element {
	useEffect(() => {
		fetch("/api/checkDB").then(() => {});
	});
	return <>{children}</>;
}

export default WithDB;
