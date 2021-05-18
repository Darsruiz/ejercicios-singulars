import { Component, OnInit } from '@angular/core';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  juan: Item = {
    id: 1,
    name: 'Juan'
  };;

  constructor() { }

  ngOnInit(): void {
  }


}
