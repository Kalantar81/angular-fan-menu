import { EnumGooeyMenuOpenDirection } from './menu-enums';

export interface IFanGooeyMenuButton {
  buttonIconName: string;
  checked: boolean;
  enabled: boolean;
  tooltip: string;
  menuBtnColor?: string;
  /** for inner using */
  openGooeyMenuDirection?: EnumGooeyMenuOpenDirection;
  children?: Array<IFanGooeyMenuButton>;
  id?: string;
}


export interface IMenuStatus {
  isMenuOpen: boolean;
  menuId: string;
}
