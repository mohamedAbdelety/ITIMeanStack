import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MeanStack100';
  constructor(private braekPoint : BreakpointObserver) {

  }
  ngOnInit(): void {
    this.braekPoint.observe([`(max-width:720px)`]).subscribe((state:BreakpointState)=>{
      this.smallScreen = state.matches;
    })
  }

  smallScreen : boolean = false


}
