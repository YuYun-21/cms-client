import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavigateComponent } from './navigate/navigate.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CarouselforindexComponent } from './carouselforindex/carouselforindex.component';
import { SplistforindexComponent } from './splistforindex/splistforindex.component';
import { NewslistforindexComponent } from './newslistforindex/newslistforindex.component';
import { SpdetailComponent } from './spdetail/spdetail.component';
import { NewsdetailComponent } from './newsdetail/newsdetail.component';
import { AudiolistforindexComponent } from './audiolistforindex/audiolistforindex.component';
import { AudioplayComponent } from './audioplay/audioplay.component';
import {VgCoreModule} from "videogular2/compiled/src/core/core";
import {VgControlsModule} from "videogular2/compiled/src/controls/controls";
import {VgOverlayPlayModule} from "videogular2/compiled/src/overlay-play/overlay-play";
import {VgBufferingModule} from "videogular2/compiled/src/buffering/buffering";
import { VideolistforindexComponent } from './videolistforindex/videolistforindex.component';
import { VideoplayComponent } from './videoplay/videoplay.component';
import {HttpClientModule} from "@angular/common/http";
import { Spdetail1Component } from './spdetail1/spdetail1.component';
import { Spdetail2Component } from './spdetail2/spdetail2.component';
import { TohtmlPipe } from './pipe/tohtml.pipe';
import { NewsadminComponent } from './admin/newsadmin/newsadmin.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavigateComponent,
    CarouselforindexComponent,
    SplistforindexComponent,
    NewslistforindexComponent,
    SpdetailComponent,
    NewsdetailComponent,
    AudiolistforindexComponent,
    AudioplayComponent,
    VideolistforindexComponent,
    VideoplayComponent,
    Spdetail1Component,
    Spdetail2Component,
    TohtmlPipe,
    NewsadminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
