import * as React from "react";
import { Outlet } from "react-router-dom";
import { EIcon } from "src/icons";
import NavigationLink from "src/common/components/navigation-link";
import { useAppSelector } from "src/hooks";
import { selectors } from "src/containers/home/store/selectors";
import './Layout.scss';
import { DEFAULT_CITY_NAME } from "src/common/constants/constants";

export const Layout: React.FC = () => {
  const city = useAppSelector(selectors.name);
  const maimCls = 'navBar';
  return (
    <>
      <nav>
        <div className={maimCls}>
          <div className={`${maimCls}__items`}>
            <NavigationLink icon={EIcon.Home} path={`/home/${city || DEFAULT_CITY_NAME}`}/>
            <NavigationLink icon={EIcon.MagnifyingGlass} path={'/search'}/>
          </div>
        </div>
      </nav>
      <main className="content">
        <Outlet />
      </main>
    </>
  )
}

export default Layout;