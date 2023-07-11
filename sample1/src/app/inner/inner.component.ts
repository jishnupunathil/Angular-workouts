import { Component } from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent {

  sayHello(data:HTMLInputElement){

    window.alert('heyy'+data.value)

  }

  numbers:number[]=[
    1,2,3,4,5
  ]

}
