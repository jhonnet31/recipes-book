import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selection = 'recipes';

  Navigation(route:string){
    console.log(route);
    this.selection=route;
  }
}
