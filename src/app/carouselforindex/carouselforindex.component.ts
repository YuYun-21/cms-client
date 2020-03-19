import { Component, OnInit } from '@angular/core';
import {Carousel} from "../model/Carousel";
import {CarouselService} from "../service/carousel.service";
import {ConfigService} from "../service/config.service";

@Component({
  selector: 'app-carouselforindex',
  templateUrl: './carouselforindex.component.html',
  styleUrls: ['./carouselforindex.component.css']
})
export class CarouselforindexComponent implements OnInit {


  cl:Array<Carousel>;

  constructor(private carouselservice:CarouselService
    ,private config:ConfigService
  ) {
    this.cl=new Array();
  }

  ngOnInit() {
    this.getCarouselList();

  }

  getCarouselList() {
    // this.carouselservice.getCarouselList()
    //   .then((data: any) => {
    //
    //     this.cl = new Array();
    //     this.cl = data;
    //
    //   })
    this.cl=new Array();
    this.cl=
      [
        {
          "carouselid": "1",
          "title": "标题1",
          "description": "描述1",
          "picurl": "http://cms.heyunhui.top/assets/images/4.jpg",
          "contenturl": "newsdetail;newsid=1"
        },
        {
          "carouselid": "2",
          "title": "标题2",
          "description": "描述2",
          "picurl": "http://cms.heyunhui.top/assets/images/5.jpg",
          "contenturl": "newsdetail;newsid=2"
        },
        {
          "carouselid": "3",
          "title": "标题3",
          "description": "描述3",
          "picurl": "http://cms.heyunhui.top/assets/images/6.jpg",
          "contenturl": "newsdetail;newsid=3"
        }
      ];
  }

  onCarouselClick(url:string){

    window.open(this.config.WEBHOST+url);
  }

}
