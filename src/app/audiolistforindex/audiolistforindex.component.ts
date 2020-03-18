import { Component, OnInit } from '@angular/core';
import {Media} from "../model/Media";
import {MediaService} from "../service/media.service";

@Component({
  selector: 'app-audiolistforindex',
  templateUrl: './audiolistforindex.component.html',
  styleUrls: ['./audiolistforindex.component.css']
})
export class AudiolistforindexComponent implements OnInit {

  ml:Array<Media>;
  constructor(private mediaservice:MediaService) {
    this.ml=new Array();
  }

  ngOnInit() {
    this.getMediaList();
  }

  getMediaList(){

    this.mediaservice.getMediaList("AUDIO")
      .then((data:any)=>{
        this.ml=new Array();
        this.ml=data;

      })
  }

}
