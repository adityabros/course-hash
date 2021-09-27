import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesItemsComponent } from './courses-items.component';
import { RouterTestingModule } from '@angular/router/testing';
import {NgxPaginationModule} from 'ngx-pagination';
import {render, screen, fireEvent} from '@testing-library/angular'

describe('CoursesItemsComponent', () => {
  let component: CoursesItemsComponent;
  let fixture: ComponentFixture<CoursesItemsComponent>;

  // est('should render counter', async () => {
  //   await render(CoursesItemsComponent, {})
  //   expect(screen.getByText('Current Count: 5'))
  // })t

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesItemsComponent ],
      imports: [
        RouterTestingModule,
        NgxPaginationModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
