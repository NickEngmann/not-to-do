import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendItemsComponent } from './send-items.component';

describe('SendItemsComponent', () => {
  let component: SendItemsComponent;
  let fixture: ComponentFixture<SendItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
