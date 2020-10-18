import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServerCallService {

  constructor(private http :HttpClient) { }

  baseUrl = "http://localhost:8080/";
  imageBaseUrl = "http://localhost:8080/images/";


  fnSendPostReq(url,data){
    return this.http.post(this.baseUrl+url,data)
  }

  fnSendGetReq(url){
    return this.http.get(this.baseUrl+url);
  }

}
