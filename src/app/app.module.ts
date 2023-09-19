import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './weather.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, WeatherComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
