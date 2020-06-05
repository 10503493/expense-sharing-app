import { Component } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  Category: any;
  total=0;
  food=0;
  constructor() { }


  GroupSelected(group) {
    alert(group)
  }
  CategoryFinder(Category) {
    alert(Category);
   
  }

  AddExpense(Category,expense)
  {
    if (Category=='Food')
    {
      this.food+=expense;
    }
    this.total=this.total+expense
    console.log("your toatal expense is ",this.food,"for",Category)
    
  }

}
