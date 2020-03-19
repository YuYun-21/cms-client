import { Injectable } from '@angular/core';
import {ConfigService} from "./config.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private config:ConfigService
  ,private http:HttpClient) { }

  private getCarouselListUrl=this.config.HOST+"/public/getCarouselList";
  getCarouselList(){
    return this.http.get(this.getCarouselListUrl).toPromise();
  }

  private getCarouselListMapUrl=this.config.HOST+"/public/getCarouselListMap";
  getCarouseListMap(){
    return this.http.get(this.getCarouselListMapUrl).toPromise();
  }

  private uplaodPicUrl=this.config.HOST+"/manage/uploadPic";
  uploadPic(file:string){

    const uploadData = new FormData();
    uploadData.append('uploadfile', file);
    return this.http.post(this.uplaodPicUrl,uploadData).toPromise();

  }
}
