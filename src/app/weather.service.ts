import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey: string = '5f17103e3c28ef70e71a28f897bbb666';

  constructor(private http: HttpClient) {}

  getWeather(city: string) {
    
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5f17103e3c28ef70e71a28f897bbb666&units=metric`
    );
  }
}
