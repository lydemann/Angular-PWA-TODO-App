import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TodoListService } from './core/todo-list/todo-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(translate: TranslateService, todoListService: TodoListService) {
    translate.addLangs(['en', 'da']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|da/) ? browserLang : 'en'); this enabled setting lang automatically
    translate.use('en');

    todoListService.getAndSetTodoList();
  }
}
