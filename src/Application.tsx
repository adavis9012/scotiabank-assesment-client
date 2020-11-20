import React from 'react';
import { Route } from 'react-router-dom';
import Header from "./components/molecules/Header";
import LazyLoader from "./utils/LazyLoader";
import "./settings/_base.scss";

const MainPage = React.lazy(() => import('./pages/MainPage'));
const AccountsPage = React.lazy(() => import('./pages/AccountsPage'));
const MovementsPage = React.lazy(() => import('./pages/MovementsPage'));

function Application() {
  return (
      <div className="application">
          <Header/>
          <main className="application_wrapper">
              <Route exact path="/" component={LazyLoader(MainPage)} />
              <Route exact path="/accounts" component={LazyLoader(AccountsPage)} />
              <Route exact path="/movements/:id" component={LazyLoader(MovementsPage)} />
          </main>
      </div>
  );
}

export default Application;
