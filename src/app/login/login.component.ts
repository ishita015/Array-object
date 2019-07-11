import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data = {
    'datas':
    {
      a:5,
      b:6
    }
  }
  constructor() { }

  ngOnInit() {
    var i
    i = 34
    for(let i=0; i<4;i++){
      console.log("rrr",i);
    }
    console.log("uuu",i);
    this.function();
    
    // var i = 2;
    var j = 2;
    var equal = (i == j)
    console.log(equal);

    var a = 3;
    var j = 3;    
    var equal2 = (a === j)
    console.log(equal2);
    
    let temp;
    temp = this.data;
    temp = this.data.datas.a ;
    console.log("XXXXX XXXXXXX XXXXXXXXXXXXX XXXXX",temp);
    
  }
   
  function(){
    for(var i=0;i<10;i++){
      console.log(i);
    }
    console.log(i);
  }
  
  


}
export class LoginModule { }
