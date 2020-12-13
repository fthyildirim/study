import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './container/app/app.component';
import { HomeworkComponent } from './component/homework/homework.component';
import { HelloComponent } from './component/hello/hello.component';
import { WorkComponent } from './component/work/work.component';
import { NewcomponentanmeComponent } from './component/newcomponentanme/newcomponentanme.component';
import { PurpleComponent } from './component/purple/purple.component';
import { GodStaRComponent } from './component/god-sta-r/god-sta-r.component';
import { HiguysComponent } from './component/higuys/higuys.component';
import { DualipaComponent } from './component/dualipa/dualipa.component';
import { VideoComponent } from './component/video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeworkComponent,
    HelloComponent,
    WorkComponent,
    NewcomponentanmeComponent,
    PurpleComponent,
    GodStaRComponent,
    HiguysComponent,
    DualipaComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
