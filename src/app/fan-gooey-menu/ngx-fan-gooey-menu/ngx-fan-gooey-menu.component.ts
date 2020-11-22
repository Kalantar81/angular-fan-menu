import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { IFanGooeyMenuButton } from '../models/IFan-menu-interfaces';
import { EnumMenuLocation } from '../models/menu-enums';

@Component({
  selector: 'ngx-fan-gooey-menu',
  templateUrl: './ngx-fan-gooey-menu.component.html',
  styleUrls: ['./ngx-fan-gooey-menu.component.css'],
})
export class NgxFanGooeyMenuComponent implements OnInit {

  @Input()
  set isOpenAtStart(p_isOpenAtStart: boolean) {
    this._isOpenAtStart = p_isOpenAtStart;
  }

  @Input()
  set fanMenuBtnColor(p_fanMenuBtnColor: string) {
    this._fanMenuBtnColor = p_fanMenuBtnColor;
  }

  @Input()
  set menuIconName(p_menuIconName: string) {
    this._menuIconName = p_menuIconName;
  }

  @Input()
  set menuSize(p_menuSize: number) {
    this._menuSize = p_menuSize;
  }

  @Input()
  set gooeyItems(p_gooeyItems: Array<IFanGooeyMenuButton>) {
    this._gooeyItems = p_gooeyItems;
  }

  @Output()
  combineMenuActionName: EventEmitter<string> = new EventEmitter<string>();

  private _isOpenAtStart: boolean;
  private _fanMenuBtnColor: string;
  private _menuIconName: string;
  private _menuSize: number;
  private _gooeyItems: Array<IFanGooeyMenuButton> = [];
  private _menuLocation: EnumMenuLocation;


  constructor() {
  }

  ngOnInit() {
  }

  private _getcombineMenuActionName(p_activateAction: string): void {
    this.combineMenuActionName.emit(p_activateAction);
  }

}
