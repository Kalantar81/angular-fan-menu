import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { IFanGooeyMenuButton } from '../models/IFan-menu-interfaces';

@Component({
  selector: 'ngx-fan-gooey-menu',
  templateUrl: './ngx-fan-gooey-menu.component.html',
  styleUrls: ['./ngx-fan-gooey-menu.component.css'],
})
export class NgxFanGooeyMenuComponent {
  @Input() isOpenAtStart: boolean;
  @Input() fanMenuBtnColor: string;
  @Input() menuIconName: string;
  @Input() menuSize: number;
  @Input() gooeyItems: Array<IFanGooeyMenuButton> = [];

  @Output()
  combineMenuActionName: EventEmitter<string> = new EventEmitter<string>();

  public getCombineMenuActionName(activateAction: string): void {
    this.combineMenuActionName.emit(activateAction);
  }

}
