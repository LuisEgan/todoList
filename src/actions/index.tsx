import * as types from './types';

export type Action = {
    type: types.ADD_TODO,
    todo: string
} | {
    type: types.DEL_TODO,
    todo: string    
};

export const addTodo = (todo: string): Action => ({
    type: types.ADD_TODO,
    todo: todo
});

export const delTodo = (todo: string): Action => ({
    type: types.DEL_TODO,
    todo: todo
});