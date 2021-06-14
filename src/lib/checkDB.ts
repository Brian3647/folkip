import { connect } from "../database/connect";

export default async (): Promise<{ status: number; json: { error: string } | {} }> => {
	try {
		connect();
		return { status: 200, json: {} };
	} catch (err: any) {
		console.error(err);
		return { status: 500, json: { error: "Something gone wrong on the server" } };
	}
};
