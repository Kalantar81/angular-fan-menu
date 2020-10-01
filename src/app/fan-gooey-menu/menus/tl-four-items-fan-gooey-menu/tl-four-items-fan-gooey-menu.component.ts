import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-tl-four-items-fan-gooey-menu',
  templateUrl: './tl-four-items-fan-gooey-menu.component.html',
  styleUrls: ['./tl-four-items-fan-gooey-menu.component.css']
})
export class TlFourItemsFanGooeyMenuComponent implements OnInit {
  private _menuBtnColor: string;
  private _menuSize: number;
  private _menuIcon: string;
  private _items: Items = new Items();


  public openMenuIndicator = false;

  @ViewChild('circularMenuLeft')
  public circularMenuLeftDiv: ElementRef;

  @ViewChild('floatingBtn')
  public floatingBtnDiv: ElementRef;

  constructor() {
    this._menuBtnColor = 'red';
    this._menuIcon = 'menu-icon';

    this._items = {
      firstItem: {icon: {name: 'restore-icon', action: 'FIRST_CHILD_ACTION'}},
      secondItem: {icon: {name: 'restore-icon', action: 'SECOND_CHILD_ACTION'}},
      thirdItem: {icon: {name: 'restore-icon', action: 'THIRD_CHILD_ACTION'}},
      fourthItem: {icon: {name: 'restore-icon', action: 'FOURTH_CHILD_ACTION'}}
    };
  }

  ngOnInit() {
    //this.circularMenuLeftDiv.nativeElement.style.transform =  'scale(1)';
    this.floatingBtnDiv.nativeElement.style.backgroundColor = this._menuBtnColor;
  }

  public mouseClick(): void {
    if (this.openMenuIndicator) {
      this.openMenuIndicator = false;
    } else {
      this.openMenuIndicator = true;
    }
    this.circularMenuLeftDiv.nativeElement.style.backgroundColor = this._menuBtnColor;
  }

  private _firstChildAction(): void {
    alert(this._items.firstItem.icon.action);
  }

  private _secondChildAction(): void {
    alert(this._items.secondItem.icon.action);
  }

  private _thirdChildAction(): void {
    alert(this._items.thirdItem.icon.action);
  }

  private _fourthChildAction(): void {
    alert(this._items.fourthItem.icon.action);
  }
}


export class Items {
  firstItem: IItem;
  secondItem: IItem;
  thirdItem?: IItem;
  fourthItem?: IItem;
}

export interface IIconSettings {
  name: string;
  action: string;
  animation?: boolean;
}

export interface IItem {
  icon: IIconSettings;
}
