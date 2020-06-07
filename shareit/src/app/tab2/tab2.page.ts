import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild('barChart') barChart;

  bars: any;
  colorArray: any;
  education: any;
  grocery: any;
  food: any;
  drinks: any;
  restaurant: any;
  tips: any;
  health: any;
  cloths: any;
  fun: any;
  personal: any;
  merchandise: any;
  rent: any;
  pets: any;
  transportation: any;
  fuel: any;
  others: any;
  constructor(private storage: Storage) { }

  ionViewDidEnter() {
    this.createBarChart();
  }
 
  createBarChart()
   {
    this.storage.get('education').then((val) => {
      console.log('Your age is', val);
      this.education=val;
      console.log(this.education);
      });
      this.storage.get('grocery').then((val) => {
        console.log('Your agmme is', val);
        this.grocery=val;
        console.log(this.education);
        });
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Education', 'Grocery', 'Food', 'Drinks', 'Restaurant', 'Tips', 'Health', 'Cloths','Fun','Personal','Merchandise','Rent','Pets','Transportation','Fuel','Others'],
         datasets: [{
          label: 'Your Spending',
         
          data: [this.education, this.grocery, this.food,  this.drinks, this.restaurant, this.tips,this.health,this.cloths,this.fun,this.personal,this.merchandise,this.rent,this.pets,this.transportation,this.fuel,this.others],
          backgroundColor: 'rgb(4, 204, 154)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(34, 4, 74)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
        
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
  
}