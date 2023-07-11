import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'sample1';

  inputText:string=''

  changeName(input:HTMLInputElement){
    this.inputText=input.value
  }

}
