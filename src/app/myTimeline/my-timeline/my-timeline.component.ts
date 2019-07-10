import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-my-timeline',
  templateUrl: './my-timeline.component.html',
  styleUrls: ['./my-timeline.component.css']
})
export class MyTimelineComponent implements OnInit {

  public mydata;

  constructor(private myservice: MyServiceService) { }

  ngOnInit() {
  }

}
