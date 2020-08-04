import { Injectable } from "@angular/core";
import { Log } from "../models/Log";

@Injectable({
  providedIn: "root",
})
export class LogService {
  logs: Log[];

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
        text: "Authentication setup.",
        date: new Date("12/02/2020 11:22:22"),
      },
    ];
  }

  getLogs() {
    return this.logs;
  }
}
