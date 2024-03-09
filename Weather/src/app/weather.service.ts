import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  API = {
    key: '65a27c921671f0c9d2f20b7cef3ea4e3',
    base: 'https://api.openweathermap.org/data/2.5/'
  }

  constructor(private http:HttpClient) { }
  
  FetchWeather(city:any){
    return new Promise<void>((resolve, reject) => {
      try {
        const url = `${this.API.base}weather?q=${city}&appid=${this.API.key}`;
        this.http.get<any>(url).subscribe({
          next:(data)=>{
            resolve(data);
          }
        })
      } catch (error) {
        reject('Error fetching data');
      }
    })
  }

}
