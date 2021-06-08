import { ApplicationIcon } from 'src/app/entities/types/ApplicationIcon.type';
import { ApplicationPossiblePath } from 'src/app/entities/types/ApplicationPath.type';

export class TabsConfiguration {
  tabs: Tab[];
}

class Tab {
  tabName: TabName;
  tabLink: ApplicationPossiblePath;
  tabIcon: ApplicationIcon;
}

type TabName =
  | 'sign-in'
  | 'sign-up'
  | 'home'
  | 'messenger'
  | 'friends'
  | 'settings'
  | 'profile';
