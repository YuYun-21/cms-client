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
}
