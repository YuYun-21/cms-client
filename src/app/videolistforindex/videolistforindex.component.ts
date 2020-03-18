import { Component, OnInit } from '@angular/core';
import {Media} from "../model/Media";
import {MediaService} from "../service/media.service";

@Component({
  selector: 'app-videolistforindex',
  templateUrl: './videolistforindex.component.html',
  styleUrls: ['./videolistforindex.component.css']
})
export class VideolistforindexComponent implements OnInit {
  ml:Array<Media>
  constructor(private mediaservice:MediaService) {
    this.ml=new Array();
  }

  ngOnInit() {
    this.getMediaList();
  }

  getMediaList(){

    this.mediaservice.getMediaList("VIDEO")
      .then((data:any)=>{
        this.ml=new Array();
        this.ml=data;

      })

  }

}
