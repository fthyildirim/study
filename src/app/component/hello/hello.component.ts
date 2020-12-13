import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cs-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton() {
    alert('test message');
  }
}
