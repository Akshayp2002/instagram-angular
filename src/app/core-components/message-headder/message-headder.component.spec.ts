import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageHeadderComponent } from './message-headder.component';

describe('MessageHeadderComponent', () => {
  let component: MessageHeadderComponent;
  let fixture: ComponentFixture<MessageHeadderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageHeadderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageHeadderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
