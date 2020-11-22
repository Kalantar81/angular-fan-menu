import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import {
  IFanGooeyMenuButton,
  IMenuStatus,
} from 'app/fan-gooey-menu/models/IFan-menu-interfaces';
import {
  EnumGooeyMenuOpenDirection,
  EnumIconConditions,
} from 'app/fan-gooey-menu/models/menu-enums';
import { GooeyMenuComponent } from '../gooey-menu/gooey-menu.component';

@Component({
  selector: 'app-bl-four-items-fan-gooey-menu',
  templateUrl: './bl-four-items-fan-gooey-menu.component.html',
  styleUrls: ['./bl-four-items-fan-gooey-menu.component.css'],
})
export class BlFourItemsFanGooeyMenuComponent implements OnInit, AfterViewInit {

  @ViewChild('circularMenuLeft')
  public circularMenuLeftDiv: ElementRef;

  @ViewChildren(GooeyMenuComponent)
  public fanMenuChildren: QueryList<GooeyMenuComponent>;

  // @TODO rename it
  @Input('isOpenAtStart') openMenuIndicator = true;

  @Input() fanMenuBtnColor: string;
  @Input() menuIconName: string;
  @Input() menuSize: number;

  @Input()
  set gooeyItems(items: Array<IFanGooeyMenuButton>) {
    // Do not break connections
    this._gooeyItems.splice(0);
    this._fanMenuButtons.splice(0);

    items.forEach(item => {
      if (item.children) {
        this._gooeyItems.push(item);
        return;
      }
      // else
      this._fanMenuButtons.push({...item});
    });

    this._defineOpenDirections();
  }

  @Output()
  combineMenuActionName: EventEmitter<string> = new EventEmitter<string>();

  public _gooeyItems: Array<IFanGooeyMenuButton> = [];
  public _fanMenuButtons: Array<IFanGooeyMenuButton> = [];
  public EnumIconConditions = EnumIconConditions;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const fanMenuSize = this.menuSize ? 'scale(' + this.menuSize + ')' : 'scale(1)';
    this.circularMenuLeftDiv.nativeElement.style.transform = fanMenuSize;
  }

  public fanMenuButtonTrackByFunc(index: number, item: IFanGooeyMenuButton): any {
    return item.id;
  }

  public gooeyItemsTrackByFunc(index: number, item: IFanGooeyMenuButton): any {
    return item.id;
  }

  public fanMenuBtnClick(): void {
    if (this.openMenuIndicator) {
      this.openMenuIndicator = false;
      this.closeAllGooeyMenus();
      console.log('fan menu close');
    } else {
      this.openMenuIndicator = true;
      console.log('fan menu open');
    }
  }

  public closeAllGooeyMenus(): void {
    this.fanMenuChildren.map((item: GooeyMenuComponent) => {
      if (item.menuStatus.isMenuOpen) {
        item.clickGooeyMenuBtn();
      }
    });
  }

  public updateMenus(event: IMenuStatus): void {
    this.fanMenuChildren.map((item: GooeyMenuComponent) => {
      if ((event.menuId !== item.gooeyBtnId) && (item.menuStatus.isMenuOpen)) {
        item.clickGooeyMenuBtn();
      }
    });
  }

  public closeOpenItems(p_index: number): void {
    if (this._fanMenuButtons[p_index].enabled) {
      this.fanMenuChildren.map((item: GooeyMenuComponent) => {
        if (item.menuStatus.isMenuOpen) {
          item.clickGooeyMenuBtn();
        }
      });
    }
    this.combineMenuActionName.emit(this._fanMenuButtons[p_index].id);
  }

  public getCombineMenuActionName(p_gooeyActionName: string): void {
    this.combineMenuActionName.emit(p_gooeyActionName);
    this.fanMenuChildren.map((item: GooeyMenuComponent) => {
      if (item.menuStatus.isMenuOpen && !(item.gooeyBtnId === p_gooeyActionName)) {
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
