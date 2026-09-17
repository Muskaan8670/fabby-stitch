export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  isExternal?: boolean;
  isPill?: boolean;
  children?: NavItem[];
}

export interface NavAction {
  label: string;
  href: string;
  iconName?: string;
}
