import { Component, ElementRef, Input, OnInit, Output, QueryList, ViewChild, ViewChildren,EventEmitter, AfterViewInit } from '@angular/core';
import { IFanGooeyMenuButton, IMenuStatus } from 'app/fan-gooey-menu/models/IFan-menu-interfaces';
import { EnumGooeyMenuOpenDirection, EnumIconConditions } from 'app/fan-gooey-menu/models/menu-enums';
import { GooeyMenuComponent } from '../gooey-menu/gooey-menu.component';

@Component({
  selector: 'app-bl-four-items-fan-gooey-menu',
  templateUrl: './bl-four-items-fan-gooey-menu.component.html',
  styleUrls: ['./bl-four-items-fan-gooey-menu.component.css']
})
export class BlFourItemsFanGooeyMenuComponent implements OnInit, AfterViewInit {

  @ViewChild('circularMenuLeft')
  public circularMenuLeftDiv: ElementRef;

  @ViewChildren(GooeyMenuComponent)
  fanMenuChildren: QueryList<GooeyMenuComponent>;

  @Input()
  set isOpenAtStart(p_isOpenAtStart: boolean) {
    this._isOpenAtStart = p_isOpenAtStart;
    this.openMenuIndicator = this._isOpenAtStart;
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
    this._gooeyItems = [];
    this._fanMenuButtons = [];

    for (let i = 0; i < p_gooeyItems.length; i++) {
      if (p_gooeyItems[i].children) {
        this._gooeyItems.push(p_gooeyItems[i]);
      } else {
        this._fanMenuButtons.push(
          {
            id: p_gooeyItems[i].id,
            checked: p_gooeyItems[i].checked,
            enabled: p_gooeyItems[i].enabled,
            menuBtnColor: p_gooeyItems[i].menuBtnColor,
            buttonIconName: p_gooeyItems[i].buttonIconName,
            tooltip: p_gooeyItems[i].tooltip
          }
        );
      }

    }
    this._defineOpenDirections();
  }

  @Output()
  combineMenuActionName: EventEmitter<string> = new EventEmitter<string>();

  private _isOpenAtStart: boolean = true;
  private _fanMenuBtnColor: string;
  private _menuIconName: string;
  private _menuSize: number;
  private _gooeyItems: Array<IFanGooeyMenuButton> = [];
  private _fanMenuButtons: Array<IFanGooeyMenuButton> = [];

  public openMenuIndicator: boolean = true;
  public EnumIconConditions = EnumIconConditions;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    const fanMenuSize = this._menuSize ? 'scale(' + this._menuSize + ')' : 'scale(1)';
    this.circularMenuLeftDiv.nativeElement.style.transform = fanMenuSize;
  }

  public fanMenuButtonTrackByFunc(p_index: number, p_item: IFanGooeyMenuButton): any {
    return p_item.id;
  }

  public gooeyItemsTrackByFunc(p_index: number, p_item: IFanGooeyMenuButton): any {
    return p_item.id;
  }

  public fanMenuBtnClick(): void {
    if (this.openMenuIndicator) {
      this.openMenuIndicator = false;
      this._closeAllGooeyMenus();
      console.log('fan menu close');
    } else {
      this.openMenuIndicator = true;
      console.log('fan menu open');
    }
  }

  private _closeAllGooeyMenus(): void {
    this.fanMenuChildren.map((item: GooeyMenuComponent) => {
      if (item.menuStatus.isMenuOpen) {
        item.clickGooeyMenuBtn();
      }
    });
  }

  private _updateMenus(event: IMenuStatus): void {
    this.fanMenuChildren.map((item: GooeyMenuComponent) => {
      if ((event.menuId !== item.gooeyBtnId) && (item.menuStatus.isMenuOpen)) {
        item.clickGooeyMenuBtn();
      }
    });
  }

  private _closeOpenItems(p_index: number): void {
    if (this._fanMenuButtons[p_index].enabled) {
      this.fanMenuChildren.map((item: GooeyMenuComponent) => {
        if (item.menuStatus.isMenuOpen) {
          item.clickGooeyMenuBtn();
        }
      });
    }
    this.combineMenuActionName.emit(this._fanMenuButtons[p_index].id);
  }

  private _getcombineMenuActionName(p_gooeyActionName: string): void {
    this.combineMenuActionName.emit(p_gooeyActionName);
    this.fanMenuChildren.map((item: GooeyMenuComponent) => {
      if (item.menuStatus.isMenuOpen && !(item.gooeyBtnId == p_gooeyActionName)) {
        item.clickGooeyMenuBtn();
      }
    });
  }

  private _defineOpenDirections(): void {
    const fanMenuButtonsAmount: number = this._fanMenuButtons.length;
    switch (this._gooeyItems.length) {
      case 1:
        if (fanMenuButtonsAmount > 2) {
          this._gooeyItems[0].openGooeyMenuDirection = EnumGooeyMenuOpenDirection.RIGHT;
        } else {
          this._gooeyItems[0].openGooeyMenuDirection = EnumGooeyMenuOpenDirection.UP;
        }
        break;
      case 2:
        for (let i = 0; i < 2; i++) {
          if (fanMenuButtonsAmount > 2) {
            this._gooeyItems[i].openGooeyMenuDirection = EnumGooeyMenuOpenDirection.RIGHT;
          }
        }
        break;
      case 3:
        for (let i = 0; i < 3; i++) {
          if (i < 1) {
            this._gooeyItems[i].openGooeyMenuDirection = EnumGooeyMenuOpenDirection.UP;
          } else {
            this._gooeyItems[i].openGooeyMenuDirection = EnumGooeyMenuOpenDirection.RIGHT;
          }
        }
        break;
      case 4:
        for (let i = 0; i < 4; i++) {
          if (i < 2) {
            this._gooeyItems[i].openGooeyMenuDirection = EnumGooeyMenuOpenDirection.UP;
          } else {
            this._gooeyItems[i].openGooeyMenuDirection = EnumGooeyMenuOpenDirection.RIGHT;
          }
        }
        break;
    }
  }


}


