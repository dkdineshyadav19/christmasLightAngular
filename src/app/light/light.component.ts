import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  value="";
  speed="";
  light=document.getElementsByClassName("light");
  play()
  {
    this.value="";
  }
  stop(){
    this.value="none";
  }
  AniSpeed(){
    this.speed+="s";
  }

}
