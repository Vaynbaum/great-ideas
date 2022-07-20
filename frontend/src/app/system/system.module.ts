import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { PublicComponent } from './public/public.component';
import { ProfileComponent } from './profile/profile.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { SliderComponent } from './public/slider/slaider.component';
import { IdeasComponent } from './ideas/ideas.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { ChartComponent } from '../shared/components/cards/chart/chart.component';

import { AddIdeaComponent } from './ideas/idea-page/add-idea/add-idea.component';
import { EditIdeaComponent } from './ideas/idea-page/edit-idea/edit-idea.component';
import { FormsModule } from '@angular/forms';
import { IdeaService } from './shared/services/idea.service';
import { ShopComponent } from './shop/shop.component';
import { EditAccountComponent } from './profile/edit-account/edit-account.component';
import { DropdownDirective } from '../shared/directive/dropdown.directive';
import { UnloadService } from './shared/services/unload.service';
import { InfoProfileComponent } from '../shared/components/cards/info-profile/info-profile.component';
import { IdeaComponent } from '../shared/components/cards/idea/idea.component';
import { SearchPipe } from './shared/pipes/search.pipe';
import { SearchComponent } from '../shared/components/cards/search/search.component';
import { UrlImgService } from '../shared/servecies/url-img.service';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { TopPanelComponent } from '../shared/components/cards/top-panel/top-panel.component';

import { LinkComponent } from '../shared/components/link/link.component';
import { SharedModule } from '../shared/shared.module';
import { PanelComponent } from '../shared/components/cards/panel/panel.component';
import { ItemPageComponent } from './shop/item-page/item-page.component';

@NgModule({
  declarations: [
    SystemComponent,
    PublicComponent,
    ProfileComponent,
    SliderComponent,
    IdeasComponent,
    HeaderComponent,
    FooterComponent,
    ChartComponent,
    DropdownDirective,
    AddIdeaComponent,
    EditIdeaComponent,
    ShopComponent,
    EditAccountComponent,
    InfoProfileComponent,
    IdeaComponent,

    SearchPipe,
    SearchComponent,
    FilterPipe,
    TopPanelComponent,

    LinkComponent,
    PanelComponent,
    ItemPageComponent,
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    FormsModule,
    NgImageSliderModule,
    GoogleChartsModule,
    SharedModule,
  ],
  providers: [IdeaService, UnloadService, UrlImgService],
})
export class SystemModule {}
