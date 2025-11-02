export interface ButtonItem {
  id: string;
  className: string;
  text: string;
  onClick?: () => void;
}

export type Button = ButtonItem;
