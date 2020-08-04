import { Injectable } from "@angular/core";
import { Log } from "../models/Log";
import { BehaviorSubject, Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({
    id: null,
    text: null,
    date: null,
  });
  selectedLog = this.logSource.asObservable();

  constructor() {
    this.logs = [
      {
        id: "1",
        text: "Generate comp.",
        date: new Date("12/02/2020 11:22:22"),
      },
      {
        id: "2",
        text: "Fixing bugs",
        date: new Date("12/02/2020 11:22:22"),
      },
      {
        id: "3",
        text: "Authentication setup",
        date: new Date("12/02/2020 11:22:22"),
      },
    ];
  }

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }
}
