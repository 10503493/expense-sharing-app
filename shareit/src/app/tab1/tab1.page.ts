import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  constructor() { }


  GroupSelected(group) {
    alert(group)
  }
  CategoryFinder(Category) {
    alert(Category);
    let categoryvalue=Category;
  }
  AddExpense()
  {
    let expense=5;
    console.log(expense , )
  }

}


