import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  applications = [
    {
      "csi" : 172041,
      "name" : "Inventory Manager"
    },
    {
      "csi" : 160760,
      "name" : "Global Positions Data Warehouse"
    }
  ];

  constructor(private appService: ApplicationService) { }

  ngOnInit() {
  }

  getServices(){
    this.appService.setApplication
  }

}
