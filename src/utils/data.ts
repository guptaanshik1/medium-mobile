export enum MainFooterTypes {
  HOME = 'Home',
  EXPLORE = 'Explore',
  BOOKMARKS = 'Bookmarks',
  PROFILE = 'Profile',
}

export type TMainFooterConfig = {
  [key in MainFooterTypes]: {
    icon: string;
  };
};

export type TBottomNavigatonParamList = {
  Home: undefined;
  Explore: undefined;
  Bookmarks: undefined;
  Profile: undefined;
};
