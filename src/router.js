import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import UserList from './components/User/UserList';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/userList" exact component={UserList} />
      </Switch>

    </Router>
  );
}

export default RouterConfig;
