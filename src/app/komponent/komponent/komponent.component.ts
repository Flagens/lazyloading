import { Component } from '@angular/core';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-komponent',
  templateUrl: './komponent.component.html',
  styleUrls: ['./komponent.component.css']
})
export class KomponentComponent {
  inputValue: string = '';

  constructor(private dataService: DataService) { }

  onInputChange(value: string) {
    this.inputValue = value;
    this.dataService.setInputValue(value);
  }

  onSubmit() {
    this.dataService.setInputValue(this.inputValue);
    this.inputValue = '';
}
}