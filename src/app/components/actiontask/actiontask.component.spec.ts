import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiontaskComponent } from './actiontask.component';

describe('ActiontaskComponent', () => {
  let component: ActiontaskComponent;
  let fixture: ComponentFixture<ActiontaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiontaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiontaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
