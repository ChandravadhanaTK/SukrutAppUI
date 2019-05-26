import { Reducer } from 'redux'
import { TodoActions, TodoActionTypes } from '../actions/todoActions'

export interface ITodo {
	userId: number,
	id: number,
	title: string,
	completed: boolean
}

export interface ITodoState {
	readonly todos: ITodo[],
	readonly currentTodo?: ITodo
}

const initialTodoState: ITodoState = {
	todos: []
} 

export const todoReducer: Reducer<ITodoState, TodoActions> = (
	state = initialTodoState,
	action
) => {
	switch (action.type) {
		case TodoActionTypes.GET_ALL: {
			return { ...state, todos: action.payload }
		}
		case TodoActionTypes.GET_ONE: {
			return { ...state, todo: action.payload }
		}
		default:
			return state
	}
}