import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  peopleArray = [
    { id: 123, name: "dave", age: 23 },
    { id: 456, name: "tom", age: 56 },
    { id: 789, name: "bob", age: 23 },
    { id: 101, name: "tom", age: 23 },
    { id: 102, name: "tim", age: 23 }
  ]

  items = [
    { name: 'xyz', subMenuItem: [{ name: 'abc' }, { lastname: 'cde' }, {}], icon: 'home' },
    {
      name: 'pqr', subMenuItem: [{ name: 'dfg' }, { lastname: 'cde' },
      { subMenuItem1: [{ name: 'ishu' }, { lastname: 'cde' }] }], icon: 'home'
    },
    // { subMenuItem2: [{ name: 'sheena' }, { lastname: 'verma' }], icon: 'home1' }
  ];
  ngOnInit() {
    const arrayToObject = (array) => {
      array.reduce((obj, items) => {
        obj[items.id] = items
        return obj
      }, {})
    }
    const peopleObject = arrayToObject(this.peopleArray)
    const itemsToObject = (array2) => {
      array2.reduce((obj1, items1) => {
        console.log("obj1", obj1);
        items1 = items1.subMenuItem
        items1.subMenuItem1 = items1
        console.log(items1);
      })
    }
    const Array = itemsToObject(this.items)
  }
  submit(){
    
  }
  
  
}
