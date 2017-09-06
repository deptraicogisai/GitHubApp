import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Hero} from "../../../../model/hero";
import {User} from "../../../../model/user";
import {FormControl, Validators} from "@angular/forms";
import {HeroService} from "../../../service/hero.service";
import {TableColumn} from "../../../../model/table-column";
import {UiPagingComponent} from "../../../helper/ui-paging/ui-paging.component";
import {NavigationStart, Router} from "@angular/router";
import {resolve} from "q";
import 'rxjs/add/operator/toPromise';
import {Subject} from "rxjs/Subject";
import {ConfirmDialogComponent} from "../../../confirm-dialog/confirm-dialog.component";
import {Observable} from "rxjs/Observable";

declare var $: any;

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  things$ = Observable.of(
    [{
    car: 'Honda',
    shoes: 'Nike',
    shirt: 'Tom Ford',
    watch: 'Timex'
   },
    {
      car: 'Honda A',
      shoes: 'Nike',
      shirt: 'Tom Ford',
      watch: 'Timex'
    }
  ]).delay(1000);

  private subject: Subject<boolean>;

  @ViewChild('dialog')
  private confirmDialog: ConfirmDialogComponent;

  @ViewChild('child')
  private pagingComponent: UiPagingComponent;
  private canNavigate: boolean = true;

  @ViewChild('dialog')
  private dialog: ConfirmDialogComponent;

  users: User[] = [];
  total: number;
  search: string = '';
  query = {
    page: 1,
    itemPerPage: 3
  }

  columns: TableColumn[] = [{
    caption: 'Github Name',
    field: 'login',
    isImage: false
  }, {
    caption: 'Avatar',
    field: 'avatar_url',
    isImage: true
  }];

  name = new FormControl('', [Validators.required, Validators.maxLength(15)]);

  constructor(private heroService: HeroService, router: Router) {

  }

  handleDialogButton(): Promise<boolean> {
    var prom = new Promise<boolean>((resolve, reject) => {
      this.dialog.buttonResultEmitter.subscribe(
        (result) => {
          if (result == true) {
            resolve(true);
          } else {
            reject(false);
          }
        });
    });
    return prom;
  }

  canDeactivate(): Promise<boolean> {

    this.confirmDialog.showModal();

    return this.handleDialogButton().catch(function () {
      return false;
    });
  }

  ngOnInit() {


    this.name.valueChanges.debounceTime(300).distinctUntilChanged()
      .switchMap(t => this.heroService.getListUserInfo(t, this.query.page, this.query.itemPerPage))
      .subscribe((result) => {
        this.users = result.data;
        this.total = result.total;
      })
  }

  CallChild() {
    this.pagingComponent.onClickParent();
  }

  loadData() {
    this.heroService.getListUserInfo(this.search, this.query.page, this.query.itemPerPage)
      .subscribe(
        (result) => this.users = result.data
      );
  }

  changePage(query) {
    this.query = query;
    this.loadData();
  }

}
