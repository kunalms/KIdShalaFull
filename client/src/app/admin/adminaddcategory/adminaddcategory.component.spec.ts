import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddcategoryComponent } from './adminaddcategory.component';

describe('AdminaddcategoryComponent', () => {
  let component: AdminaddcategoryComponent;
  let fixture: ComponentFixture<AdminaddcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminaddcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminaddcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
