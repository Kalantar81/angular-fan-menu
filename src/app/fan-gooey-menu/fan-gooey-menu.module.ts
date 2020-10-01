import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFanGooeyMenuComponent } from './ngx-fan-gooey-menu/ngx-fan-gooey-menu.component';
import { BlFourItemsFanGooeyMenuComponent } from './menus/bl-four-items-fan-gooey-menu/bl-four-items-fan-gooey-menu.component';
import { TlFourItemsFanGooeyMenuComponent } from './menus/tl-four-items-fan-gooey-menu/tl-four-items-fan-gooey-menu.component';

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
    TlFourItemsFanGooeyMenuComponent
  ]
})
export class FanGooeyMenuModule { }
