import { Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter, AfterViewInit } from '@angular/core';
import { IFanGooeyMenuButton, IMenuStatus } from 'app/fan-gooey-menu/models/IFan-menu-interfaces';
import { EnumGooeyMenuOpenDirection, EnumIconConditions } from 'app/fan-gooey-menu/models/menu-enums';

@Component({
  selector: 'app-gooey-menu',
  templateUrl: './gooey-menu.component.html',
  styleUrls: ['./gooey-menu.component.css']
})
export class GooeyMenuComponent implements OnInit, AfterViewInit {

  @ViewChild('floatingBtn')
  public floatingBtnDiv: ElementRef;

  @ViewChild('circularMenu')
  public circularMenuDiv: ElementRef;

  @Input()
  set menuBtnTooltip(p_menuBtnTooltip: string) {
    this._menuBtnTooltip = p_menuBtnTooltip;
  }

  @Input()
  set menuIcon(p_menuIcon: string) {
    this._menuIcon = p_menuIcon;
  }

  @Input()
  set menuOpenDirection(p_menuOpenDirection: EnumGooeyMenuOpenDirection) {
    this._menuOpenDirection = p_menuOpenDirection;
  }

  @Input()
  set menuBtnColor(p_menuBtnColor: string) {
    this._menuBtnColor = p_menuBtnColor;
  }

  @Input()
  set gooeyChildren(p_gooeyChildren: Array<IFanGooeyMenuButton>) {
    this._gooeyChildren = p_gooeyChildren;
  }

  @Input()
  set gooeyBtnId(p_gooeyBtnId: string) {
    this._gooeyBtnId = p_gooeyBtnId;
  }

  get gooeyBtnId(): string {
    return this._gooeyBtnId;
  }

  set menuStatus(p_menuStatus: IMenuStatus) {
    this._menuStaus = {
      menuId: this._gooeyBtnId,
      isMenuOpen: p_menuStatus.isMenuOpen
    };
  }

  get menuStatus(): IMenuStatus {
    return this._menuStaus;
  }

  @Output()
  gooeyMenuActivated = new EventEmitter();

  @Output()
  combineMenuActionName = new EventEmitter();

  private _menuBtnColor: string;
  private _menuBtnTooltip: string;
  private _menuIcon: string;
  private _menuOpenDirection: EnumGooeyMenuOpenDirection;
  private _gooeyBtnId: string;
  private _gooeyChildren: Array<IFanGooeyMenuButton>;
  private _menuStaus: IMenuStatus;

  public EnumGooeyMenuOpenDirection = EnumGooeyMenuOpenDirection;
  public EnumIconConditions = EnumIconConditions;

  constructor() { }

  ngOnInit() {
    this.floatingBtnDiv.nativeElement.style.backgroundColor = this._menuBtnColor;
    this.menuStatus = {
      isMenuOpen: false,
      menuId: this._gooeyBtnId
    };
  }

  ngAfterViewInit() {
    this.circularMenuDiv.nativeElement.id = this._gooeyBtnId;
  }

  private _childAction(p_index: number): void {
    if (this._gooeyChildren[p_index].enabled) {
      this.combineMenuActionName.emit(this._gooeyChildren[p_index].id);
    }
  }

  public clickGooeyMenuBtn(): void {
    document.getElementById(this.circularMenuDiv.nativeElement.id).classList.toggle('active');
    if (this._menuStaus.isMenuOpen) {
      this._menuStaus.isMenuOpen = false;
    } else {
      this._menuStaus.isMenuOpen = true;
      this.gooeyMenuActivated.emit(this.menuStatus);
      this.combineMenuActionName.emit(this._gooeyBtnId);
    }
  }

}
