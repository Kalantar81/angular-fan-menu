import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  IFanGooeyMenuButton,
  IMenuStatus,
} from 'app/fan-gooey-menu/models/IFan-menu-interfaces';
import {
  EnumGooeyMenuOpenDirection,
  EnumIconConditions,
} from 'app/fan-gooey-menu/models/menu-enums';

@Component({
  selector: 'app-gooey-menu',
  templateUrl: './gooey-menu.component.html',
  styleUrls: ['./gooey-menu.component.css'],
})
export class GooeyMenuComponent implements OnInit, AfterViewInit {

  @ViewChild('floatingBtn')
  public floatingBtnDiv: ElementRef;

  @ViewChild('circularMenu')
  public circularMenuDiv: ElementRef;

  @Input() menuBtnTooltip: string;
  @Input() menuIcon: string;
  @Input() menuOpenDirection: EnumGooeyMenuOpenDirection;
  @Input() menuBtnColor: string;
  @Input() gooeyChildren: Array<IFanGooeyMenuButton>;
  @Input() gooeyBtnId: string;

  set menuStatus(p_menuStatus: IMenuStatus) {
    this._menuStatus = {
      menuId: this.gooeyBtnId,
      isMenuOpen: p_menuStatus.isMenuOpen,
    };
  }

  get menuStatus(): IMenuStatus {
    return this._menuStatus;
  }

  @Output() gooeyMenuActivated = new EventEmitter();
  @Output() combineMenuActionName = new EventEmitter();

  private _menuStatus: IMenuStatus;

  public EnumGooeyMenuOpenDirection = EnumGooeyMenuOpenDirection;
  public EnumIconConditions = EnumIconConditions;

  constructor() {
  }

  ngOnInit() {
    this.floatingBtnDiv.nativeElement.style.backgroundColor = this.menuBtnColor;
    this.menuStatus = {
      isMenuOpen: false,
      menuId: this.gooeyBtnId,
    };
  }

  ngAfterViewInit() {
    this.circularMenuDiv.nativeElement.id = this.gooeyBtnId;
  }

  public _childAction(p_index: number): void {
    if (this.gooeyChildren[p_index].enabled) {
      this.combineMenuActionName.emit(this.gooeyChildren[p_index].id);
    }
  }

  public clickGooeyMenuBtn(): void {
    document.getElementById(this.circularMenuDiv.nativeElement.id).classList.toggle('active');
    if (this._menuStatus.isMenuOpen) {
      this._menuStatus.isMenuOpen = false;
    } else {
      this._menuStatus.isMenuOpen = true;
      this.gooeyMenuActivated.emit(this.menuStatus);
      this.combineMenuActionName.emit(this.gooeyBtnId);
    }
  }

}
