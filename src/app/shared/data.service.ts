import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private inputValue: string = '';

  setInputValue(value: string) {
    this.inputValue = value;
  }

  getInputValue(): string {
    return this.inputValue;
  }
}