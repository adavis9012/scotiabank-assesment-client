import React from 'react';
import { Route } from 'react-router-dom';
import Header from "./components/molecules/Header";
import "./settings/_base.scss";
import AccountsPage from "./pages/AccountsPage";
import LazyLoader from "./utils/LazyLoader";

const MainPage = React.lazy(() => import('./pages/MainPage'));

function Application() {
  return (
      <div className="application">
          <Header/>
          <main className="application_wrapper">
              <Route exact path="/" component={LazyLoader(MainPage)} />
              <Route exact path="/accounts" component={LazyLoader(AccountsPage)} />
          </main>
      </div>
  );
}

export default Application;
