import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  constructor() { }

  projects:{id:number,title: string}[] = [
    {id:0, title:'predict-o-matic'},
    {id:1, title:'pantai balangan'},
    {id:2, title:'wavecast'},
    {id:3, title:'moon audit'},     

  ]

  getProjects():Observable<any>{
    let obs = new Observable((observer)=>{
      observer.next(this.projects)
    })
    return obs
  }
}
