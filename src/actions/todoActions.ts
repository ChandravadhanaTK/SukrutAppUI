import { ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import API from '../api/apiController'

// Import Todo Typing
import { ITodo } from '../reducers/todoReducer'

// Creating Action constants
export enum TodoActionTypes {
	GET_ALL = 'GET_ALL',
	GET_ONE = 'GET_ONE'
}

// Interface for Get All Action Type
export interface ITodoGetAllAction {
	type: TodoActionTypes.GET_ALL,
	payload: ITodo[]
}

export interface ITodoGetOneAction {
	type: TodoActionTypes.GET_ONE,
	payload: ITodo
}

// Combine and export all Action Types with union
export type TodoActions = ITodoGetAllAction | ITodoGetOneAction;

/* Get All Action
<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const getAllTodos: ActionCreator<
	ThunkAction<
		Promise<any>,  							 // The type of the last action to be dispatched - will always be promise<T> for async actions
		ITodo[],                     // The type for the data within the last action
		null,                        // The type of the parameter for the nested function 
		ITodoGetAllAction            // The type of the last action to be dispatched
	>
> = () => {
	return async (dispatch: Dispatch) => {
		API.get('/todos')
      .then(res => dispatch({type: TodoActionTypes.GET_ALL, payload: res}))
      .catch(err => console.log(err))
	}
}

// Get One Action
export const getOneTodo: ActionCreator<
	ThunkAction<Promise<any>, ITodo, ITodo, ITodoGetOneAction>
> = (todo: ITodo) => {
	return async (dispatch: Dispatch) => {
		API.get(`/todo/${todo.id}`)
			.then(res => dispatch({type: TodoActionTypes.GET_ONE, payload: res}))
			.catch(err => console.log(err))
	}
}