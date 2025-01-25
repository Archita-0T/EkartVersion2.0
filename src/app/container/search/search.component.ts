import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',

  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = '';
  //1. create an Event
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  onSearchTextChanged() {}

  updateSearchText(inputEl: HTMLInputElement) {
    // this.searchText=event.target.value;
    this.searchText = inputEl.value;
    this.searchTextChanged.emit(this.searchText);
  }
}
