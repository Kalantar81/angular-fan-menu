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
        {id: 'b3', buttonIconName: 'restore-icon', checked: true, enabled: true, tooltip: 'b3 action checked icon'},
        {id: 'b4', buttonIconName: 'restore-icon', checked: false, enabled: true, tooltip: 'b4 action'}
      ]},
      {id: 'a2', menuBtnColor: '#00ff00', buttonIconName: 'menu-icon', checked: false, enabled: true, tooltip: 'a2 action',
      children: [
        {id: 'c1',  buttonIconName: 'restore-icon', checked: false, enabled: true, tooltip: 'c1 action'},
        {id: 'c2',  buttonIconName: 'restore-icon', checked: true, enabled: true, tooltip: 'c2 action checked icon'},
        {id: 'c3', buttonIconName: 'restore-icon', checked: false, enabled: false, tooltip: 'c3 action disable icon'},
        {id: 'c4', buttonIconName: 'restore-icon', checked: false, enabled: false, tooltip: 'c4 action disable icon'}
      ]},
      {id: 'a3',  menuBtnColor: 'yellow', buttonIconName: 'menu-icon', checked: false, enabled: true, tooltip: 'a3 action',
      children: [
        {id: 'd1',  buttonIconName: 'restore-icon', checked: false, enabled: true, tooltip: 'd1 action'},
        {id: 'd2',  buttonIconName: 'restore-icon', checked: false, enabled: false, tooltip: 'd2 action disable icon'},
        {id: 'd3', buttonIconName: 'restore-icon', checked: false, enabled: true, tooltip: 'd3 action'},
        {id: 'd4', buttonIconName: 'restore-icon', checked: false, enabled: true, tooltip: 'd4 action'},
      ]
      },
      {id: 'a4', menuBtnColor: 'blue', buttonIconName: 'restore-icon', checked: false, enabled: true, tooltip: 'a4 action'},

   ];
  }

  ngOnInit() {

  }


  private _getcombineMenuActionName(p_actionId: string): void {}

}
