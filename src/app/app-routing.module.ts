import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {SpdetailComponent} from "./spdetail/spdetail.component";
import {NewsdetailComponent} from "./newsdetail/newsdetail.component";
import {AudioplayComponent} from "./audioplay/audioplay.component";
import {VideoplayComponent} from "./videoplay/videoplay.component";
import {Spdetail1Component} from "./spdetail1/spdetail1.component";
import {Spdetail2Component} from "./spdetail2/spdetail2.component";
import {NewsadminComponent} from "./admin/newsadmin/newsadmin.component";


const routes: Routes = [
  {path:'index',component:IndexComponent},
  {path:'spdetail',component:SpdetailComponent},
  {path:'spdetail1',component:Spdetail1Component},
  {path:'spdetail2',component:Spdetail2Component},
  {path:'newsdetail',component:NewsdetailComponent},
  {path:'audioplay',component:AudioplayComponent},
  {path:'videoplay',component:VideoplayComponent},
  {path:'newsadmin',component:NewsadminComponent},
  { path: '**', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
