import * as React from "react";
import { Navigate, Route, Routes} from "react-router-dom";
import Home from "src/containers/home";
import Search from "src/containers/search";
import Layout from "src/common/components/Layout";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home/:city" element={<Home />} />
        <Route path="home/:lat/:lon" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route index element={<Navigate replace to="home/Пермь" />} />
      </Route>
    </Routes>
  )
}

export default React.memo(AppRouter);