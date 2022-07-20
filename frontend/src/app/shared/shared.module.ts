import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleComponent } from './components/cards/title/title.component';
import { ImageComponent } from './components/cards/image/image.component';
import { ItemComponent } from './components/cards/item/item.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { StatisticComponent } from './components/cards/statistic/statistic.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

@NgModule({
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    TitleComponent,
    ImageComponent,
    ItemComponent,

    TextareaComponent,
    StatisticComponent,
    CheckboxComponent,
  ],
  declarations: [
    TitleComponent,
    ImageComponent,
    ItemComponent,

    TextareaComponent,
    StatisticComponent,
    CheckboxComponent,
  ],
})
export class SharedModule {}
