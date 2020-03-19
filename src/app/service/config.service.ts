import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  // public HOST="http://cms.heyunhui.top:8080";
  // public WEBHOST="http://cms.heyunhui.top:8080";

  public HOST="http://localhost:8080";
  public WEBHOST="http://localhost:4200";
}
