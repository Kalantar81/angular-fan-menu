import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bl-four-items-fan-gooey-menu',
  templateUrl: './bl-four-items-fan-gooey-menu.component.html',
  styleUrls: ['./bl-four-items-fan-gooey-menu.component.css']
})
export class BlFourItemsFanGooeyMenuComponent implements OnInit {
  private _menuBtnColor: string;
  private _menuSize: number;
  private _menuIcon: string;
  private _itemIcons: ItemIcons = new ItemIcons();


  public openMenuIndicator = false;

  @ViewChild('circularMenuLeft')
  public circularMenuLeftDiv: ElementRef;

  @ViewChild('floatingBtn')
  public floatingBtnDiv: ElementRef;

  constructor() {
    this._menuBtnColor = 'red';
    this._menuIcon = 'menu-icon';

    this._itemIcons = {
      firstChild: {name: 'restore-icon', action: 'FIRST_CHILD_ACTION'},
      secondChild: {name: 'restore-icon', action: 'SECOND_CHILD_ACTION'},
      thirdChild: {name: 'restore-icon', action: 'THIRD_CHILD_ACTION'},
      fourthChild: {name: 'restore-icon', action: 'FOURTH_CHILD_ACTION'}
    };
  }

  ngOnInit() {
    //  this.circularMenuLeftDiv.nativeElement.style.transform =  'scale(1)';
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
    alert(this._itemIcons.firstChild.action);
  }

  private _secondChildAction(): void {
    alert(this._itemIcons.secondChild.action);
  }

  private _thirdChildAction(): void {
    alert(this._itemIcons.thirdChild.action);
  }

  private _fourthChildAction(): void {
    alert(this._itemIcons.fourthChild.action);
  }
}

export class ItemIcons {
  firstChild: IIconSettings;
  secondChild: IIconSettings;
  thirdChild: IIconSettings;
  fourthChild?: IIconSettings;
}

export interface IIconSettings {
  name: string;
  action: string;
  animation?: boolean;
}
