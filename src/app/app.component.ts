import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  pieChartData = [
    {
      label: 'Liverpool FC',
      value: 5,
      color: 'red',
    },
    {
      label: 'Real Madrid	',
      value: 13,
      color: 'black',
    },
    {
      label: 'FC Bayern München',
      value: 5,
      color: 'blue',
    },
  ];
}
