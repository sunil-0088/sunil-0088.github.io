import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './MyComponents/one/one.component';
import { SecondComponent } from './MyComponents/second/second.component';
import { SideNavComponent } from './MyComponents/side-nav/side-nav.component';
import { ChatModule } from './MyModules/chat/chat.module';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    SecondComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
