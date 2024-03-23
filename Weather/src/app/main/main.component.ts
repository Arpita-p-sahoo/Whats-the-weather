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
  currenttime:any;
  async FetchWeather(val:any){
    
    try {
      let data = await this.weatherSvc.FetchWeather(val);
      this.data = data;
      console.log(data);
      
      this.currentTemp = this.GetCurrentTemp(this.data.main.temp);
    } catch (error) {
      console.error(error); // Log any errors that occur during the fetch operation
    }
    
  }

  GetCurrentTemp = (data:number):number | undefined =>{
    if(this.data){
     return Math.round(this.data.main.temp - 273);
    }else{
      return undefined;
    }
  }

  GetTimeByLocation(offset:any){
    const current_utc_time = new Date();
    const offsetMilsec = offset * 1000;
    const bhubaneswarTimeMilliseconds = current_utc_time.getTime() + offsetMilsec;
    this.currenttime = new Date(bhubaneswarTimeMilliseconds);
    console.log(this.currenttime);
    
  }
}
