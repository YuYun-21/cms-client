import { Injectable } from '@angular/core';
import {ConfigService} from "./config.service";
import {HttpClient} from "@angular/common/http";
import {News} from "../model/News";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private config:ConfigService
  ,private http:HttpClient) { }
  //获得新闻列表
  private getNewsListUrl=this.config.HOST+'/public/getNewsList';
  getNewsList(){
    return this.http.get(this.getNewsListUrl).toPromise();
  }
  //获得单个新闻对象
  private getSingleNewsByIdUrl=this.config.HOST+"/public/getSingleNewsById";

  getSingleNewsById(newsid:string){

    let parm={
      "newsid":newsid
    }
    return this.http.post(this.getSingleNewsByIdUrl,parm).toPromise();
  }

  //保存新闻对象

  private saveNewsUrl=this.config.HOST+"/manage/saveNews";
  saveNews(news:News){
    return this.http.post(this.saveNewsUrl,news).toPromise();


  }

  //删除新闻对象

  private deleteNewsUrl=this.config.HOST+"/manage/deleteNews";

  deleteNews(id:string){
    let parm={
      "newsid":id
    }
    return this.http.post(this.deleteNewsUrl,parm).toPromise();
  }


}
