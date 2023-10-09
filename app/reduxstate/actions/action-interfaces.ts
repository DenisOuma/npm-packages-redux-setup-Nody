import { ActionType } from "../action-types";
// Setingup the action Interfaces

interface SearchRepositoriesAction {
	type: ActionType.SEARCH_REPOSITORIES;
	payload?: any;
}

interface SearchRepositoriesSuccessAction {
	type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
	payload: string[];
}

interface SearchRepositoriesErrorAction {
	type: ActionType.SEARCH_REPOSITORIES_ERROR;
	payload: string;
}

// Settingup our action
export type Action =
	| SearchRepositoriesAction
	| SearchRepositoriesSuccessAction
	| SearchRepositoriesErrorAction;
