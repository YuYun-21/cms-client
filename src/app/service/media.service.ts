import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConfigService} from "./config.service";

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private config:ConfigService,
              private http:HttpClient) { }

  private getMediaListUrl=this.config.HOST+"/public/getMediaListByType";

  getMediaList(type:string) {
    let parm = {
      "type": type
    }

    return this.http.post(this.getMediaListUrl, parm).toPromise();
  }
}
