import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  Category: any;
  total = 0;
  education = 0;
  grocery = 0;
  food = 0;
  drinks = 0;
  restaurant = 0;
  tips = 0;
  health = 0;
  cloths = 0;
  fun = 0;
  personal = 0;
  merchandise = 0;
  rent = 0;
  pets = 0;
  transportation = 0;
  fuel = 0;
  others = 0;

  constructor() { }


  GroupSelected(group) {
    alert(group)
  }
  CategoryFinder(Category) {
    //alert(Category);

  }

  AddExpense(Category, expense)
   {
    switch (Category) 
    {
      case 'Education':
        {
          this.education += expense;
          //console.log(this.education,Category)
          break;
        }

      case 'Grocery':
        {
          this.grocery += expense;
          //console.log(this.grocery,Category)
          break;
        }
      case 'Food':
        {
        this.food += expense;
        break;
        }
      case 'Drinks':
        {
        this.drinks += expense;
        break;
        }
      case 'Restaurant':
        {
        this.restaurant += expense;
        break;
        }
        case 'Tips':
        {
        this.tips += expense;
        break;
        }
        case 'Health':
        {
        this.health += expense;
        break;
        }
        case 'Cloths':
        {
        this.cloths += expense;
        break;
        }
        case 'Fun':
        {
        this.fun += expense;
        break;
        }
        case 'Drinks':
        {
        this.drinks += expense;
        break;
        }
        case 'Personal':
        {
        this.personal += expense;
        break;
        }
        case 'Merchandise':
        {
        this.merchandise += expense;
        break;
        }
        case 'Rent':
        {
        this.rent += expense;
        break;
        }
        case 'Pets':
        {
        this.pets += expense;
        break;
        }
        case 'Transportation':
        {
        this.transportation += expense;
        break;
        }
        case 'Fuel':
        {
        this.fuel += expense;
        break;
        }
        case 'Others':
        {
        this.others += expense;
        break;
        }
    }
    //this.total=this.total+expense
    console.log("your expenses are recorded")
  }




}
