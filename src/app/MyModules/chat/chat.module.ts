import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { ChatRoomsSectionComponent } from './chat-rooms-section/chat-rooms-section.component';
import { ChatSectionComponent } from './chat-section/chat-section.component';
import { NewChatComponent } from './new-chat/new-chat.component';

@NgModule({
  declarations: [ChatComponent, ChatRoomsSectionComponent, ChatSectionComponent, NewChatComponent],
  imports: [CommonModule, ChatRoutingModule],
  bootstrap: [ChatComponent],
})
export class ChatModule {}
