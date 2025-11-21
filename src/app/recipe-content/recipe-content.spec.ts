import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeContent } from './recipe-content';

describe('RecipeContent', () => {
  let component: RecipeContent;
  let fixture: ComponentFixture<RecipeContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
