import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-submodul',
  templateUrl: './submodul.component.html',
  styleUrls: ['./submodul.component.css']
})
export class SubmodulComponent implements OnInit {
  inputValue: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.inputValue = this.dataService.getInputValue();
  }
}