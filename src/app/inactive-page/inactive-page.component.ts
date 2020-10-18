import { Component, OnInit } from '@angular/core';
import {ServerCallService} from '../services/server-call.service'

@Component({
  selector: 'app-inactive-page',
  templateUrl: './inactive-page.component.html',
  styleUrls: ['./inactive-page.component.css']
})
export class InactivePageComponent implements OnInit {

  constructor(private serverCall: ServerCallService) { }

  ngOnInit() {
  }

}
