import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyTimelineComponent } from './myTimeline/my-timeline/my-timeline.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { DatapageComponent } from './myTimeline/datapage/datapage.component';
import { MyServiceService } from './my-service.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MyTimelineComponent,
    DatapageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}

// const appRoutes: Routes = [
//   {
//     path: 'search/tweets',
//     component: MyTimelineComponent
//   },
//   {
//     path: '',
//     redirectTo: '',
//     pathMatch: 'full'
//   }
// ];
