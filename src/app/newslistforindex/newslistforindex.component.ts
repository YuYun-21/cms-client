import { Component, OnInit } from '@angular/core';
import {News} from "../model/News";
import {NewsService} from "../service/news.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-newslistforindex',
  templateUrl: './newslistforindex.component.html',
  styleUrls: ['./newslistforindex.component.css']
})
export class NewslistforindexComponent implements OnInit {
  nl:Array<News>;

  constructor(private newsservice:NewsService
    ,private router:Router) {
    this.nl=new Array();
  }

  ngOnInit() {
    this.getNewsList();
  }

  getNewsList(){
    this.newsservice.getNewsList()
      .then((data:any)=>{
        this.nl=new Array();
        this.nl=data;
      })
  }

  goToNewsDetail(id:string){
    this.router.navigate(['newsdetail',{"newsid":id}])

  }

}
