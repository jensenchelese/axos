import { Component } from '@angular/core';
import { StocksService } from './stocks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'axos-project';
  data=[]
  dates=[]
  category='AAPL';
  isLoading = true;
  constructor(private stock:StocksService) {
    this.stock.getData(this.category).subscribe(data=>{
      this.category=data["Meta Data"]["2. Symbol"]
      this.data=Object.entries(data["Time Series (Daily)"])
      this.isLoading=false;
    })
  }

  onCategoryChange(category){
    this.stock.getData(this.category).subscribe(data=>{
      this.category=data["Meta Data"]["2. Symbol"]
      this.data=Object.entries(data["Time Series (Daily)"])
      this.isLoading=false;
    })
  }

  loadingIcon(){
    this.isLoading = true;
  }
}
