import { dispatch, dispatchAsync, dispatchLocalAsync } from '../util/AppDispatcher';
import ActionTypes from '../util/ActionTypes';
import AppConstants from '../util/AppConstants';
import RequestService from '../util/RequestService';

export default {
	
	githubDirectory: (path) => {

		let promise = RequestService.github(path);
		
		dispatchAsync(promise, {
		  request: ActionTypes.GITHUB_FETCH,
		  success: ActionTypes.GITHUB_SUCCESS,
		  failure: ActionTypes.GITHUB_FAILED
		}, {});

	},
	
	githubNotebook: (path) => {
		let promise = RequestService.github(path);
		
		dispatchAsync(promise, {
		  request: ActionTypes.GITHUB_NOTEBOOK_FETCH,
		  success: ActionTypes.GITHUB_NOTEBOOK_SUCCESS,
		  failure: ActionTypes.GITHUB_NOTEBOOK_FAILED
		}, { path });
		 
	},
	
	githubFile: (path) => {
		let promise = RequestService.github(path,false);
		
		dispatchAsync(promise, {
		  request: ActionTypes.GITHUB_FILE_FETCH,
		  success: ActionTypes.GITHUB_FILE_SUCCESS,
		  failure: ActionTypes.GITHUB_FILE_FAILED
		}, { path });
		 
	}
} 