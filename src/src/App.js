import { Route, Switch } from 'react-router-dom';
import React from 'react';

import Home from 'src/page/Home';

export default React.memo(() => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
});
