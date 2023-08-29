import { Navbar } from "./Component/Navbar/Navbar";
import { useState } from "react";
import { Sidebar } from "./Component/Sidebar/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SidebarRight from "./Component/SidebarRight/SidebarRight";
import Video from "./Component/Video/Video";
import Marketplace from "./Component/Marketplace/Marketplace";
import Groupe from "./Component/Groupes/Groupe";
import Games from "./Component/Games/Games";
import HomeScreen from "./Component/HomeScreen/HomeScreen";
import Bookmarks from "./Pages/Bookmarks/Bookmarks";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import { useEffect } from "react";
const Layout = ({ children}) => {
 
  return (
    <>
      <Navbar/>
      <div className="homecontainer d-flex justify-content-between w-full">
        <Sidebar />
        {children}
        <SidebarRight />
      </div>
    </>
  );
};
const App = () => {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Layout>
                <HomeScreen />
              </Layout>
            }
          />
          <Route
            path="/video"
            exact
            element={
              <Layout>
                <Video />
              </Layout>
            }
          />

          <Route
            path="/marketplace"
            exact
            element={
              <>
                <Navbar />
                <div className="marketplace-Container d-flex">
                  <Sidebar />
                  <Marketplace />
                </div>
              </>
            }
          />
          <Route
            path="/groups"
            exact
            element={
              <Layout>
                <Groupe />
              </Layout>
            }
          />
          <Route
            path="/games"
            exact
            element={
              <Layout>
                <Games />
              </Layout>
            }
          />
          <Route
            path="/bookmarks"
            element={
              <>
                <Navbar />
                <Bookmarks />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Navbar />
                <ProfilePage />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
