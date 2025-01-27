import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

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
  // searchInputEl is a property of SearchComponent class
  @ViewChild('searchInput') searchInputEl!:ElementRef;
  onSearchTextChanged() {}

  updateSearchText() {
    // this.searchText=event.target.value;
    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);
  }
}
