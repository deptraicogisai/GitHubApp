import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'ui-paging',
  templateUrl: './ui-paging.component.html',
  styleUrls: ['./ui-paging.component.css']
})
export class UiPagingComponent implements OnInit {

  @Input() TotalPage: number;
  @Input() CurrentPage: number = 1;
  @Input() ItemPerPage: number = 3;
  @Input() total: number;
  @Output() changePage = new EventEmitter();
  totalPagers: Array<number> = [];
  pagers: Array<number> = [];
  currentPageSelect: number = 1;
  displayPage: number;

  constructor() {
  }

  onClickParent(){
    alert(11);
  }

  ngOnInit() {

    this.TotalPage = Math.ceil(this.total / this.ItemPerPage);

    this.displayPage = this.TotalPage > 10 ? 10 : this.TotalPage;

    for (var i = 1; i <= this.TotalPage; i++)
      this.totalPagers.push(i);


    this.pagers = this.totalPagers.slice(0, this.displayPage);

  }

  selectPage(page) {
    this.currentPageSelect = page;

    if (page >= 7 && page < this.TotalPage - 4) {
      this.pagers = this.totalPagers.slice(page - 6, page - 6 + this.ItemPerPage);
    }
    else if (page < 7) {
      this.pagers = this.totalPagers.slice(0, this.displayPage);
    }
    else {
      this.pagers = this.totalPagers.slice(this.TotalPage - this.displayPage, this.TotalPage);
    }

    this.changePage.emit({page: page, itemPerPage: this.ItemPerPage});
  }
}
