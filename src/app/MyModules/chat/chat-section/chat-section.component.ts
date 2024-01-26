import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chat-section',
  templateUrl: './chat-section.component.html',
  styleUrls: ['./chat-section.component.css'],
})
export class ChatSectionComponent implements AfterViewInit {
  @ViewChild('messagesContainer') messagesContainer: ElementRef | undefined;
  userProfile = 'https://placekitten.com/50/50'; // Replace with the actual URL of the user's profile picture
  userName = 'John Doe';
  generateDummyTimestamp(): string {
    const randomDate = new Date(
      2024,
      0,
      1 + Math.floor(Math.random() * 30),
      Math.floor(Math.random() * 24),
      Math.floor(Math.random() * 60),
      Math.floor(Math.random() * 60)
    );
    return randomDate.toISOString();
  }
  messages: { text: string; received: boolean }[] = [
    { text: 'Hello!', received: true },
    { text: 'Hi there!', received: false },
    { text: 'How are you?', received: true },
    { text: "I'm fine, thanks!", received: false },
    { text: 'This is a received message.', received: true },
    { text: 'And this is a sent message.', received: false },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices, urna eget bibendum ullamcorper, justo est tristique quam.',
      received: true,
    },
    {
      text: 'Another sent message with a longer text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices, urna eget bibendum ullamcorper, justo est tristique quam.',
      received: false,
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices, urna eget bibendum ullamcorper, justo est tristique quam.',
      received: true,
    },
    {
      text: 'Another sent message with a longer text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices, urna eget bibendum ullamcorper, justo est tristique quam.',
      received: false,
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices, urna eget bibendum ullamcorper, justo est tristique quam.',
      received: true,
    },
    {
      text: 'Another sent message with a longer text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices, urna eget bibendum ullamcorper, justo est tristique quam.',
      received: false,
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices, urna eget bibendum ullamcorper, justo est tristique quam.',
      received: true,
    },
    {
      text: 'Another sent message with a longer text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices, urna eget bibendum ullamcorper, justo est tristique quam.',
      received: false,
    },
  ];

  ngAfterViewInit() {
    console.log(this.messagesContainer);
    this.scrollToBottom();
  }
  scrollToBottom() {
    if (this.messagesContainer) {
      this.messagesContainer.nativeElement.scrollTop =
        this.messagesContainer.nativeElement.scrollHeight;
    }
  }
  sendMessage(msg:string) {
     this.messages.push({text:msg,received:false});
     
     this.scrollToBottom();

  }
}
