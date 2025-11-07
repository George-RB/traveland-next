export interface ButtonItem {
  id: string;
  className: string;
  text: string;
  onClick?: () => void;
}

export type Button = ButtonItem;

export const handleBookClick = () => {
  alert('Buttons is clicked');
};

export const handleExploreClick = () => {
  alert('Buttons is clicked');
};

export const buttonBook: Button = {
  id: 'btnBook',
  className:
    'py-3.5 px-9 bg-red-400 rounded-sm flex-0.5 cursor-pointer hover:scale-105 transition-all',
  text: 'Booking now',
  onClick: handleBookClick,
};

export const buttonExplore: Button = {
  id: 'btnExplore',
  className:
    'py-3.5 px-9 bg-red-400 rounded-sm flex-0.5 cursor-pointer hover:scale-105 transition-all',
  text: 'Explore more',
  onClick: handleExploreClick,
};
