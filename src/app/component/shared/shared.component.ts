import {Component, OnInit} from '@angular/core';
import {TestService} from "../../service/test.service";

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {
  content: string;

  constructor(private service: TestService) {
  }

  ngOnInit() {
    this.content= this.service.sayHello();
    console.log(this.content);
  }

}
