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

export interface IMutationOptions {
  onSuccess?: <T>(data?: T) => void;
  onError?: <T>(data?: T) => void;
}

export interface IArticleListResponse {
  article_id: string;
  written_by: string;
  article_title: string;
  written_in: string;
  published_on: string;
  time_to_read: string;
  article_image_address: string;
}

export type TCustomMenuProps = Array<{label: string; value: string}>;
