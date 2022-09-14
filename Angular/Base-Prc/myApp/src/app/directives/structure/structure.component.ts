import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss']
})
export class StructureComponent implements OnInit {

  toggle:boolean
 public constructor() { 
    this.toggle=true
  }

  ngOnInit(): void {
  }

}
