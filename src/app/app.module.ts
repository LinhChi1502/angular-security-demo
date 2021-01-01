import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BypassSecurityComponent } from './bypass-security/bypass-security.component';
import { InnerHtmlBindingComponent } from './inner-html-binding/inner-html-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    BypassSecurityComponent,
    InnerHtmlBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
