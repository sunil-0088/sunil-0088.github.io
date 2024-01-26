import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomsSectionComponent } from './chat-rooms-section.component';

describe('ChatRoomsSectionComponent', () => {
  let component: ChatRoomsSectionComponent;
  let fixture: ComponentFixture<ChatRoomsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatRoomsSectionComponent]
    });
    fixture = TestBed.createComponent(ChatRoomsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
