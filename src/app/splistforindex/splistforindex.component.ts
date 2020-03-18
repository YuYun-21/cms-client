import { Component, OnInit } from '@angular/core';
import {SinglePage} from "../model/SinglePage";
import {SinglepageService} from "../service/singlepage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-splistforindex',
  templateUrl: './splistforindex.component.html',
  styleUrls: ['./splistforindex.component.css']
})
export class SplistforindexComponent implements OnInit {

  singlepage:SinglePage;
  sl:Array<SinglePage>;
  constructor(private singlepageservice:SinglepageService
  ,private router:Router
  ) {
    this.singlepage=new SinglePage();
    this.sl=new Array();
  }

  ngOnInit() {
    this.getSinglePageList();
  }

  getSinglePageList(){
    this.singlepageservice.getSinglePageList()
      .then((data:any)=>{
      this.sl=new Array();
      this.sl=data;
      })
  }

  goToDetail(spid:string){
    this.router.navigate(["spdetail",{"spid":spid}]);
  }

}
