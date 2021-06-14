import checkDB from "../../src/lib/checkDB";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (_: NextApiRequest, res: NextApiResponse) => {
	const { status, json }: { status: number; json: { error: string } | {} } = await checkDB();
	res.status(status).json(json);
};
