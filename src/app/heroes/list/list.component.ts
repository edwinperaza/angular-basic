import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Batman'];
  heroeDeleted: string  = '';

   deleteHeroe() {
    this.heroeDeleted = this.heroes.shift() || '';;
   }

}
