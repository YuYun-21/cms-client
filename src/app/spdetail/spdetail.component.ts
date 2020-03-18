import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SinglepageService} from "../service/singlepage.service";
import {SinglePage} from "../model/SinglePage";

@Component({
  selector: 'app-spdetail',
  templateUrl: './spdetail.component.html',
  styleUrls: ['./spdetail.component.css']
})
export class SpdetailComponent implements OnInit {
  singlepage:SinglePage;
  spid:string;
  constructor(private parm:ActivatedRoute
  ,private singlepageservice:SinglepageService) {
    this.singlepage=new SinglePage();
    this.spid=parm.snapshot.paramMap.get("spid")
    this.getSinglePageById();
  }

  ngOnInit() {
  }

  getSinglePageById(){
    this.singlepageservice.getSinglePageById(this.spid)
      .then((data:any)=>{

      this.singlepage=new SinglePage();
      this.singlepage=data;
      })
  }

}
