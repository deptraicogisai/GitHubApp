import {Injectable} from '@angular/core';
import {Hero} from "../../model/hero";
import {HEROES} from "../../data/hero-data";
import {Observable} from "rxjs";
import {User} from "../../model/user";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {ResponseData} from "../../model/response-data";

@Injectable()
export class HeroService {

  constructor(private http: Http) {
  }

  getHero(): Hero[] {
    return HEROES;
  }

  getDetailUser(name: string): Observable<User> {
    const url = `https://api.github.com/users/${name}`;

    return this.http.get(url)
      .map(res => <User>res.json())
  }

  getListUserInfo(search: string, page: number, take: number): Observable<ResponseData<User>> {
    const url_userAll = 'https://api.github.com/users';

    const url_userByName = `https://api.github.com/users/${search}`;

    const url = search == '' ? url_userAll : url_userByName;

    if (search == '') {
      return this.http.get(url)
        .map(res => {
          let user_data = <User[]>res.json();
          let response = new ResponseData<User>();
          response.data = user_data.slice((page - 1) * take, (page - 1) * take + take);
          response.total = user_data.length;
          return response;
        })
    } else {
      return this.http.get(url)
        .map(res => {
          let user_data = <User>res.json();
          let result: User[] = [];
          result.push(user_data);
          let response = new ResponseData<User>();
          response.data = result;
          response.total = 1;
          return response;
        })
    }
  }

}
