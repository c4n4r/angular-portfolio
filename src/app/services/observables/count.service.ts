import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountService {
  private count = new BehaviorSubject<number>(0);
  private count$: Observable<number> = this.count.asObservable();

  constructor() {}

  getCount(): Observable<number> {
    return this.count$;
  }

  setCount(value: number) {
    this.count.next(value);
  }
}
