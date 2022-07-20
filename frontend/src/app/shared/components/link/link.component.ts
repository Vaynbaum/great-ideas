import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent implements OnInit {
  @Input()
  text: string | undefined;
  @Input()
  urlWhite: string | undefined;
  @Input()
  urlRed: string | undefined;
  @Input()
  link: string | undefined;
  @Input()
  reverse: boolean = false;
  @Input()
  queryParams: object | undefined;
  url: string | undefined;
  hover: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.url = this.reverse ? this.urlRed : this.urlWhite;
  }

  onHover() {
    this.hover = true;
    this.url = this.reverse ? this.urlWhite : this.urlRed;
  }

  onNonHover() {
    this.hover = false;
    this.url = this.reverse ? this.urlRed : this.urlWhite;
  }
  onClick() {
    if (this.link) {
      this.router.navigate([this.link], { queryParams: this.queryParams });
    }
  }
}
