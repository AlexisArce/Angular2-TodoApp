import {Component, OnInit} from 'angular2/core';
import {Todo} from './todo';
import {TodoService} from './todo.service';
import {TodosSortPipe} from './sort-pipe.component'

@Component({
    //name of the html element
    selector: 'my-app',
    //view of the selector,  " ` " is alt + 9
    templateUrl: "./app/todo-list.component.html",
    providers: [TodoService],
    pipes: [ TodosSortPipe ]

})


//turning the file into a module, exporting it.
export class AppComponent implements OnInit{

    public todos: Todo[];
    public edited = false;
    public changes = 0;
    //creating an istance of todoService
    constructor(private _todoService: TodoService) { };

    //getting the todos list
    getTodos() {
         /*calling the getTodos() method of TodoService,
        when the promise it's done, (than) we use a callback function (=>)
        with heroes as parameter and this.heroes = heroes as statment.
        it's the same of: todoService.getTodos().then(function(todos) {this.todos = todos}) */
        this._todoService.getTodos().then(todos => this.todos = todos);
    }

    //method that it will be calleld by angular at proper time in the beggining
    ngOnInit() {
        this.getTodos();
    }

    //method to add a new todo in the list
    addNewTodo(): void {
        //adding an element at the biggining, use push if you want at the end
        this.todos = this.todos.concat(
            {"name": "New Todo, edit it!", completed: false}
            );
        this.saveTodos();
    }


    saveTodos(): void {
       //show box msg
       this.edited = true;
    }

    editTodo(todo: Todo): void {
        //this.todos = this.todos.slice();
        this.saveTodos();
    }

    //method to remove the selected todo from the list
    deleteTodo(i: number): void {
        this.todos.splice(i, 1);
        //this.todos = this.todos.slice();
        this.saveTodos();
    }

    makeAChange(): void {
      console.log('>> makeAChange');
      this.changes += 1;
    }

    completeTodo(todo: Todo): void {
      todo.completed = !todo.completed;
      //this.todos = this.todos.slice();
    }
}