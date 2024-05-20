import {Route} from 'react-native-tab-view';
import {create} from 'zustand';

interface ITabStore {
  selectedHomeTab: Route;
  setSelectedHomeTab: (homeTab: Route) => void;
}

export const useTabStore = create<ITabStore>((set, _) => ({
  selectedHomeTab: {} as Route,
  setSelectedHomeTab: (tab: Route) => {
    set({selectedHomeTab: tab});
  },
}));
