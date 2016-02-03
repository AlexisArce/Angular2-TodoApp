import {TODOS} from './mock-todos';
import {Injectable} from 'angular2/core';
import {Todo} from './todo';

//Todo service it's will call the todo objects from our mock, or database.

@Injectable()
export class TodoService {
    getTodos() {
        //Promise.resolve for asynchronous call, UI won't block waiting for data
        return Promise.resolve(TODOS);
    }
}