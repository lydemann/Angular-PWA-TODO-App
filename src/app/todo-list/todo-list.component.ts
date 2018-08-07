import { TODOItem } from '@app/shared/models/todo-item';
import { TodoListService } from '@app/core/todo-list/todo-list.service';
import { Component } from '@angular/core';
import { PwaService } from '@app/core/pwa/pwa.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  currentTODO: TODOItem = new TODOItem('', '');

  constructor(private todoListService: TodoListService, public Pwa: PwaService) { }

  get todoList() {
    return this.todoListService.todoList;
  }

  installPwa(): void {
    this.Pwa.promptEvent.prompt();
  }

  deleteTodo(id: string) {

    const deleteIndex = this.todoListService.todoList.findIndex(todo => todo.id === id);
    this.todoListService.todoList.splice(deleteIndex, 1);
  }

  editTodo(todoItem: TODOItem) {
    this.currentTODO = todoItem;
  }
}
