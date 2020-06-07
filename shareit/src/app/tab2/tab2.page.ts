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

  createBarChart() {
    this.storage.get('education').then((val) => {
      //console.log('Your age is', val);
      this.education = val;
    });
    this.storage.get('grocery').then((val) => {
      this.grocery = val;
     // console.log(this.grocery);
    });
    this.storage.get('food').then((val) => {
      this.food = val;
    });
    this.storage.get('drinks').then((val) => {
      this.drinks = val;
    });
    this.storage.get('restaurant').then((val) => {
      this.restaurant = val;
    });
    this.storage.get('tips').then((val) => {
      this.tips = val;
    });
    this.storage.get('health').then((val) => {
      this.health = val;
    });
    this.storage.get('cloths').then((val) => {
      this.cloths = val;
    });
    this.storage.get('fun').then((val) => {
      this.fun = val;
    });
    this.storage.get('personal').then((val) => {
      this.personal = val;
    });
    this.storage.get('merchandise').then((val) => {
      this.merchandise = val;
    });
    this.storage.get('rent').then((val) => {
      this.rent = val;
    });
    this.storage.get('pets').then((val) => {
      this.pets = val;
    });
    this.storage.get('transportation').then((val) => {
      this.transportation = val;
    });
    this.storage.get('fuel').then((val) => {
      this.fuel = val;
    });
    this.storage.get('others').then((val) => {
      this.others = val;
    });
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Education', 'Grocery', 'Food', 'Drinks', 'Restaurant', 'Tips', 'Health', 'Cloths', 'Fun', 'Personal', 'Merchandise', 'Rent', 'Pets', 'Transportation', 'Fuel', 'Others'],
        datasets: [{
          label: 'Your Spending',

          data: [this.education, this.grocery, this.food, this.drinks, this.restaurant, this.tips, this.health, this.cloths, this.fun, this.personal, this.merchandise, this.rent, this.pets, this.transportation, this.fuel, this.others],
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