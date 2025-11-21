import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingTodoList } from './shopping-todo-list';

describe('ShoppingTodoList', () => {
  let component: ShoppingTodoList;
  let fixture: ComponentFixture<ShoppingTodoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingTodoList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingTodoList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
