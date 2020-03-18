import { Component, OnInit } from '@angular/core';
import {News} from "../model/News";
import {ActivatedRoute} from "@angular/router";
import {NewsService} from "../service/news.service";

@Component({
  selector: 'app-newsdetail',
  templateUrl: './newsdetail.component.html',
  styleUrls: ['./newsdetail.component.css']
})
export class NewsdetailComponent implements OnInit {
  n:News;
  newsid:string;

  constructor(private parm:ActivatedRoute
  ,private newsservice:NewsService) {
    this.n=new News();
    this.newsid=parm.snapshot.paramMap.get("newsid");
    if(this.newsid){
      this.getNewsByNewsId(this.newsid);
    }
  }

  ngOnInit() {
  }

  getNewsByNewsId(id:string){
    this.newsservice.getSingleNewsById(id)
      .then((data:any)=>{
        this.n=new News();
        this.n=data;
      })

  }

}
