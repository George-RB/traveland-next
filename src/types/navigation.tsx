export interface NavItem {
  label: string;
  href: string;
}
export type Navigation = NavItem[];

export const navItems: Navigation = [
  { label: 'Home', href: '#Home' },
  { label: 'Location', href: '#Location' },
  { label: 'Blog', href: '#Blog' },
  { label: 'About', href: '#About' },
  { label: 'Contact', href: '#Contact' },
];
