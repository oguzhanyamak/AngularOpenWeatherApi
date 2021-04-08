import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { ResponseModel } from 'src/app/models/ResponseModel';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  durum:ResponseModel = new ResponseModel()
  
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.listele()
  }

  listele(){

    let data = new ApiServiceService(this.httpClient).getData().subscribe(p=>{
      this.durum = p
    })

  }

}
