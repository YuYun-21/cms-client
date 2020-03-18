import { Injectable } from '@angular/core';
import {ConfigService} from "./config.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SinglepageService {

  constructor(private config:ConfigService
  ,private http:HttpClient) { }

  private getSinglePageListUrl=this.config.HOST+"/public/getSinglePageList"
  getSinglePageList(){
    return this.http.get(this.getSinglePageListUrl).toPromise();
  }

  private getSinglePageByIDUrl=this.config.HOST+"/public/getSinglePageById"
  getSinglePageById(spid:string){
    let parm={
      "singlepageid": spid
    }
    return this.http.post(this.getSinglePageByIDUrl,parm).toPromise();
  }
}
