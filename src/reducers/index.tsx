import { Action } from '../actions';
import { StoreState } from '../actions/storeState';
import * as types from '../actions/types';

export const todos = (state: StoreState, action: Action): StoreState => {
    const { type, todo } = action;
    switch (type) {
        case types.ADD_TODO:
            return {todos: [...state.todos, todo]};
        case types.DEL_TODO:
            return {todos: state.todos.filter( todoFilter => (todoFilter !== todo) )};
        default:
            return state;
    }
};
