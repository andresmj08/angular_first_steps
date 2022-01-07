import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'dev-project-angular';

  items = ['Dev', 'Ops', 'Bel'];

  

  
  addItem(){
    this.items.push('New');
  }

  deleteItem(index: number) {
      this.items.splice(index, 1);
  }

}
