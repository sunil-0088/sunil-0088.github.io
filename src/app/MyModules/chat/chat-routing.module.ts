import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat.component';
import { ChatRoomsSectionComponent } from './chat-rooms-section/chat-rooms-section.component';
import { ChatSectionComponent } from './chat-section/chat-section.component';
import { NewChatComponent } from './new-chat/new-chat.component';

const chatRoutes: Routes = [
  {
    path: 'chat',
    component: ChatComponent,
    children: [
      { path: '', redirectTo: 'chat-section', pathMatch: 'full' },
      { path: 'chat-section', component: ChatSectionComponent },
      { path: 'new-chat', component: NewChatComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(chatRoutes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {}
