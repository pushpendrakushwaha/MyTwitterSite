import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';


@Component({
  selector: 'app-datapage',
  templateUrl: './datapage.component.html',
  styleUrls: ['./datapage.component.css']
})
export class DatapageComponent implements OnInit {
  public mysearch;
  add: string;
  val: Array<any>;
  val2: Array<any>;
  constructor(private myServiceService: MyServiceService) {
    this.val = [];
    this.val2 = [];
  }


  ngOnInit() {
  }
  onclick() {
    this.myServiceService.getTwitterData(this.add).subscribe(myvalue => {
      this.val = myvalue.data.statuses;
      this.val2 = myvalue.data.statuses;
      console.log(this.val);
      console.log(this.val2);
      });
  }
}
