import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient:HttpClient) { }



  baseUrl="https://community-open-weather-map.p.rapidapi.com/"
  

  getData():Observable<ResponseModel>{

    return this.httpClient.get<ResponseModel>(this.baseUrl+"weather?q=Zonguldak",{headers:{

      'x-rapidapi-key' : 'e78137ed6bmshefa5f8910b9f148p1211c7jsnaa5a326f4a0d',
      'x-rapidapi-host' : 'community-open-weather-map.p.rapidapi.com',
      'useQueryString' : 'true',
      'content-type' : 'application/json'
    }})
    
  }



}
