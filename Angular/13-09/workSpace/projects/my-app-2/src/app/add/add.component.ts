import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  user: any[]

  constructor() {
    this.user = [{ 'id': 1, 'name': 'ravi' },
                 { 'id': 2, 'name': 'Suresh' }]
  }

  ngOnInit(): void {
  }

}
