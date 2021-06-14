import { Dispatch, SetStateAction } from "react";

export interface WebConfigs {
	defaults: {
		title: string;
		description: string;
	};
}

export type ReactState<T = any> = [T, Dispatch<SetStateAction<T>>];
