import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent  implements OnInit{

  about: boolean = false;
  contact:boolean = false;
  showBottom:boolean = false;
  selectedProject: {id:number, title:string} | undefined
  projects: {id:number, title:string}[] | undefined | undefined
  
  constructor(private projectService: ProjectService){}
  ngOnInit(): void {
    this.projectService.getProjects() 
    .subscribe((e)=>{
      this.selectedProject = e[0]
      this.projects = e; })
  }

  showProject(event: any, project:{id:number, title:string}){
    this.selectedProject = project;
  }

  toggleAbout(){
    this.showBottom = false
    this.about = !this.about
    if (this.about){
      this.contact = false;
      this.showBottom = true
    }
  }
  toggleContact(){
    this.showBottom = false
    this.contact = !this.contact
    if (this.contact){
      this.about = false;
      this.showBottom = true
    }
  }

  hideBottom(){
    this.about=false;
    this.contact=false;
    this.showBottom = false;
  }
  
}
