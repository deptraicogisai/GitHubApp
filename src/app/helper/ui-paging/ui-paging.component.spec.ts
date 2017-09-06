import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPagingComponent } from './ui-paging.component';

describe('UiPagingComponent', () => {
  let component: UiPagingComponent;
  let fixture: ComponentFixture<UiPagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiPagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiPagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
