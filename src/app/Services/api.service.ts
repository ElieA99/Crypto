import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string = "https://api.coingecko.com/api/v3/coins/"

  constructor(private http: HttpClient) { }

  GetCurrency(currency: string) {
    return this.http.get<any>(this.url + `markets?vs_currency=${currency}&order=market_cap_desc&sparkline=false`);
  }

  GetTrending(currency: string) {
    return this.http.get<any>(this.url + `markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`);
  }

  GetGraphical(coinId: string, currency: string, days: number) {
    return this.http.get<any>(this.url + `${coinId}/market_chart?vs_currency=${currency}&days=${days}`);
  }

  GetCurrencyId(coinId: string) {
    return this.http.get<any>(this.url + `${coinId}`);
  }

}
