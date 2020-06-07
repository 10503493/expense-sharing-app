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
          //this.storage.get('education').then((val) => {
          //console.log('Your age is', val);
          //});
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
        this.storage.get('food').then((val) => {
        this.storage.set('food', (val + expense)); 
        });
        break;
        }
      case 'Drinks':
        {
          this.storage.get('drinks').then((val) => {
            this.storage.set('drinks', (val + expense)); 
            });
        break;
        }
      case 'Restaurant':
        {
          this.storage.get('restaurant').then((val) => {
            this.storage.set('restaurant', (val + expense)); 
            });        
            break;
        }
        case 'Tips':
        {
          this.storage.get('tips').then((val) => {
            this.storage.set('tips', (val + expense)); 
            });       
             break;
        }
        case 'Health':
        {
          this.storage.get('health').then((val) => {
            this.storage.set('health', (val + expense)); 
            });        
            break;
        }
        case 'Cloths':
        {
          this.storage.get('cloths').then((val) => {
            this.storage.set('cloths', (val + expense)); 
            });       
             break;
        }
        case 'Fun':
        {
          this.storage.get('fun').then((val) => {
            this.storage.set('fun', (val + expense)); 
            });       
                   
            break;
        }
      
        case 'Personal':
        {
          this.storage.get('personal').then((val) => {
            this.storage.set('personal', (val + expense)); 
            });              
             break;
        }
        case 'Merchandise':
        {
          this.storage.get('merchandise').then((val) => {
            this.storage.set('merchandise', (val + expense)); 
            });              
             break;
        }
        case 'Rent':
        {
          this.storage.get('rent').then((val) => {
            this.storage.set('rent', (val + expense)); 
            }); 
                   
            break;
        }
        case 'Pets':
        {
          this.storage.get('pets').then((val) => {
            this.storage.set('pets', (val + expense)); 
            });      
               
            break;
        }
        case 'Transportation':
        {
          this.storage.get('transportation').then((val) => {
            this.storage.set('transportation', (val + expense)); 
            });         
               
            break;
        }
        case 'Fuel':
        {
          this.storage.get('fuel').then((val) => {
            this.storage.set('fuel', (val + expense)); 
            });          
              break;
        }
        case 'Others':
        {
          this.storage.get('others').then((val) => {
            this.storage.set('others', (val + expense)); 
            });            
            break;
        }
    }
    console.log("your expenses are recorded")
  }
ClearAll()
{
  this.storage.clear().then(() => {
  alert('All your records have been cleared cleared');
  });
}



}
