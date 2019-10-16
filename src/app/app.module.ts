import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { NgxPaginationModule } from 'ngx-pagination';
//import { JwPaginationComponent } from 'jw-angular-pagination';

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './head/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
    //NgxPaginationModule,
    //JwPaginationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
