import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

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


  constructor(private storage: Storage) { }
  

  GroupSelected(group) {
    alert(group)
  }
  CategoryFinder(Category) {
    //alert(Category);
    //this.storage.set('name', 'hhhh');

    // Or to get a key/value pair
    this.storage.get('name').then((val) => {
      console.log('Your age is', val);
    });
  

  }

  AddExpense(Category, expense)
   {
    switch (Category) 
    {
      case 'Education':
        {
          this.storage.get('education').then((val) => {
            this.storage.set('education', (val + expense));
            });
          this.storage.get('education').then((val) => {
          console.log('Your age is', val);
          });
          
          break;
        }

      case 'Grocery':
        {
          this.storage.get('grocery').then((val) => {
          this.storage.set('grocery', (val + expense)); 
          });
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
    console.log("your expenses are recorded",this.education)
  }
ClearAll()
{
  localStorage.clear();
  console.log('vhg')
}



}
