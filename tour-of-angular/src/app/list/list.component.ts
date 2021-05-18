import { Component, OnInit } from '@angular/core';
import { PLACEHOLDER } from '../interfaces/placeholder';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  placeholder = PLACEHOLDER;
  selectedJuan?: Item;
  
  constructor() { }

  ngOnInit(): void {
  }

    
    onSelect(Item: Item): void {
      this.selectedJuan = Item;
    }

}
