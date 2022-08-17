import { Component, OnInit } from '@angular/core';
import { ToggleService } from 'src/app/shared/services/toggle.service';

type Toggle = {
  name: string;
  mode: boolean;
};

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.scss'],
})
export class TopPanelComponent implements OnInit {
  toggles: Toggle[] = [
    {
      name: 'Все записи',
      mode: true,
    },
    {
      name: 'Мои записи',
      mode: false,
    },
  ];

  constructor(private toggleService: ToggleService) {}

  change(toggle: Toggle) {
    this.toggleService.changeToggle(toggle.mode);
  }

  public get mode() {
    return this.toggleService.toggle;
  }

  ngOnInit(): void {}
}
