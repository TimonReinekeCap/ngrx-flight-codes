import { Injectable } from '@angular/core';
import { delay, Observable, of, switchMap, throwError, timer } from 'rxjs';
import { Code } from '../models/code';

const codes: Code[] = [
  {
    code: 'AB 6572',
    from: 'FRA',
    to: 'TXL',
    airline: 'airberlin',
    flightCount: 1,
    time: '06:20',
  },
  {
    code: 'AB 6580',
    from: 'FRA',
    to: 'TXL',
    airline: 'airberlin',
    flightCount: 1,
    time: '10:50',
  },
  {
    code: 'AB 6588',
    from: 'FRA',
    to: 'TXL',
    airline: 'airberlin',
    flightCount: 1,
    time: '15:05',
  },
  {
    code: 'AB 6586',
    from: 'FRA',
    to: 'TXL',
    airline: 'airberlin',
    flightCount: 1,
    time: '19:20',
  },
];

@Injectable({
  providedIn: 'root',
})
export class CodesService {
  constructor() {}

  getCodes(): Observable<Code[]> {
    return Math.random() < 0.5
      ? timer(1000).pipe(
          switchMap(() =>
            throwError(() => new Error('something went wrong :('))
          )
        )
      : of(codes).pipe(delay(1000));
  }
}
