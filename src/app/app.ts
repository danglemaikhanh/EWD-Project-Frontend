import { Component, signal } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { RecipeCard } from './recipe-card/recipe-card';
import { ShoppingTodoList } from './shopping-todo-list/shopping-todo-list';
import { RecipeContent } from './recipe-content/recipe-content';

@Component({
  selector: 'app-root',
  imports: [Navbar, RecipeCard, ShoppingTodoList, RecipeContent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('cheflist-frontend');
}
