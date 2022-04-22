import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipes';

  users : any = { "id": 1, "name": 'Abhipsha', "city": 'Jeypore', "dob": '02-02-1998'}
 
}
