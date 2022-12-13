import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  private _send_data = new Subject<string>();

  constructor() {}

  setData(value:string){
    this._send_data.next(value);
  }

  getData():Observable<string>{
    return this._send_data.asObservable();
  }
}
