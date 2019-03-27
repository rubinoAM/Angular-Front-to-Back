import { Injectable } from '@angular/core';
import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})

export class LogService {
  logs:Log[];

  constructor(){
    this.logs = [
      {
        id:'1',
        text:'Generated components',
        date: new Date('3/27/19 16:16:23'),
      },
      {
        id:'2',
        text:'Added Bootstrap',
        date: new Date('3/27/19 16:16:54'),
      },
      {
        id:'3',
        text:'Added logs component',
        date: new Date('3/27/19 16:17:09'),
      }
    ]
  }

  getLogs(){
    return this.logs;
  }
}