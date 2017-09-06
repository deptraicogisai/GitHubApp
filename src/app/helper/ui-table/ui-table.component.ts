import {Component, OnInit, Input} from '@angular/core';
import {TableColumn} from "../../../model/table-column";

@Component({
  selector: 'ui-table',
  templateUrl: './ui-table.component.html',
  styleUrls: ['./ui-table.component.css']
})
export class UiTableComponent implements OnInit {

  @Input() data: any
  @Input() columns: TableColumn[];

  constructor() {

  }

  ngOnInit() {

  }

}
