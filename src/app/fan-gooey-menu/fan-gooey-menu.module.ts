import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFanGooeyMenuComponent } from './ngx-fan-gooey-menu/ngx-fan-gooey-menu.component';
import { BlFourItemsFanGooeyMenuComponent } from './menus/bl-four-items-fan-gooey-menu/bl-four-items-fan-gooey-menu.component';
import { GooeyMenuComponent } from './menus/gooey-menu/gooey-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    NgxFanGooeyMenuComponent
  ],
  declarations: [
    NgxFanGooeyMenuComponent,
    BlFourItemsFanGooeyMenuComponent,
    GooeyMenuComponent
  ]
})
export class FanGooeyMenuModule { }
