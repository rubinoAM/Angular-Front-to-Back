import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], //Services such as API's are placed here
  bootstrap: [AppComponent]
})

//Every time we make a new component, we add it to @NgModule. Import it up top, then add it to declarations.
export class AppModule { }
