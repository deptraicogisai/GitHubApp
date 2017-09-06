import { Injectable } from '@angular/core';

@Injectable()
export class TestService {


  sayHello(){
    return "hello shared module ";
  }

}
