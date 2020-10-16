import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigModule }from '../app/config/config.module'

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  constructor(private http:HttpClient) { }
  getData(input) {
    let url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + input + '&outputsize=full&apikey=' + 'API KEY HERE!!!!!!';
    return this.http.get(url);
  }
}
