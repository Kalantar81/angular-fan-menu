import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IFanGooeyMenuButton } from 'app/fan-gooey-menu/models/IFan-menu-interfaces';

@Component({
  selector: 'app-fan-menu-container',
  templateUrl: './fan-menu-container.component.html',
  styleUrls: ['./fan-menu-container.component.css']
})
export class FanMenuContainerComponent implements OnInit {

  private _isOpenAtStart: boolean;
  private _menuIconName: string;
  private _menuSize: number;
  private _fanMenuBtnColor: string;
  private _gooeyItems: Array<IFanGooeyMenuButton>;

  constructor() {
    this._isOpenAtStart = true;
    this._menuIconName = 'menu-icon';
    this._menuSize = 1;
    this._fanMenuBtnColor = 'red';

    this._gooeyItems = [
      {id: 'a1', menuBtnColor: 'orange', buttonIconName: 'menu-icon', checked: false, enabled: true, tooltip: 'a1 action',
      children: [
        {id: 'b1',  buttonIconName: 'restore-icon', checked: false, enabled: true, tooltip: 'b1 action'},
        {id: 'b2',  buttonIconName: 'restore-icon', checked: false, enabled: true, tooltip: 'b2 action'},
        {id: 'b3', buttonIconName: 'restore-icon', checked: false, enabled: true, tooltip: 'b3 action'},
      ]},
      {id: 'a2', menuBtnColor: 'orange', buttonIconName: 'restore-icon', checked: false, enabled: true, tooltip: 'a2 action',
      children: [
        {id: 'b1',  buttonIconName: 'restore-icon', checked: false, enabled: true, tooltip: 'b1 action'},
        {id: 'b2',  buttonIconName: 'restore-icon', checked: false, enabled: true, tooltip: 'b2 action'},
        {id: 'b3', buttonIconName: 'restore-icon', checked: false, enabled: true, tooltip: 'b3 action'},
      ]},
      {id: 'a3',  buttonIconName: 'menu-icon', checked: false, enabled: true, tooltip: 'a3 action',
      children: [
        {id: 'b1',  buttonIconName: 'restore-icon', checked: false, enabled: true, tooltip: 'b1 action'},
        {id: 'b2',  buttonIconName: 'restore-icon', checked: false, enabled: true, tooltip: 'b2 action'},
        {id: 'b3', buttonIconName: 'restore-icon', checked: false, enabled: true, tooltip: 'b3 action'},
      ]
      },
      {id: 'a4', menuBtnColor: 'orange', buttonIconName: 'restore-icon', checked: false, enabled: true, tooltip: 'a4 action'},

   ];
  }

  ngOnInit() {

  }


  private _getcombineMenuActionName(p_actionId: string): void {}

}
