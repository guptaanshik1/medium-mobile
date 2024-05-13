export enum MainFooterTypes {
  HOME = 'home',
  SEARCH = 'search',
  BOOKMARKS = 'bookmarks',
  PROFILE = 'profile',
}

export type TMainFooterConfig = {
  [key in MainFooterTypes]: {
    icon: string;
  };
};
