import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private weatherSvc:WeatherService){}
  data:any ;
  currentTemp:any;
  async FetchWeather(val:any){
    console.log(val);
    
    try {
      let data = await this.weatherSvc.FetchWeather(val);
      console.log(data); // Log the weather data received from the API
      this.data = data;
      this.currentTemp = this.GetCurrentTemp();
    } catch (error) {
      console.error(error); // Log any errors that occur during the fetch operation
    }
    
  }

  GetCurrentTemp = ():number | undefined =>{
    if(this.data){
     return Math.round(this.data.main.temp - 273);
    }else{
      return undefined;
    }
  }
}
