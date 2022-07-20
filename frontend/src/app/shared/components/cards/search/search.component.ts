import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Filter } from 'src/app/shared/model/filter.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input()
  filters: Filter[] = [];
  @Output()
  onFilter = new EventEmitter<object>();
  currentFilter: Filter = {
    placeholder: 'Название',
    value: '',
    field: 'name',
    type: 'name',
  };

  constructor() {}
  changeCriteria(field: string) {
    let res = this.filters.find((filter) => filter.field == field);
    this.currentFilter = res ? res : this.currentFilter;
    this.onFilter.emit(this.currentFilter);
  }
  ngOnInit(): void {
    this.filters ? (this.currentFilter = this.filters[0]) : {};
  }
}
