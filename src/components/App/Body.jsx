import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  string, func, arrayOf, shape,
} from '../common/prop-types';

const Body = ({
  RenderMenu, RenderMenuItem, RenderHome, RenderPage,
  modules, ...menuProps
}) => {
  const styles = {
    container: {
      display: 'flex',
    },
    main: {
      flex: '1 1 auto',
      padding: '1rem 2rem',
      overflowX: 'hidden',
    },
  };
  return (
    <div style={styles.container}>
      <RenderMenu
        RenderMenuItem={RenderMenuItem}
        modules={modules}
        {...menuProps}
      />

      <main style={styles.main}>
        <Switch>
          <Route exact path="/" component={RenderHome} />
          {modules.filter(r => r.component).map(module => (
            <Route key={`page-route-${module.id}`} exact path={`/${module.id}`}>
              <RenderPage module={module} />
            </Route>
          ))}
        </Switch>
      </main>
    </div>
  );
};

Body.propTypes = {
  RenderMenu: func.isRequired,
  RenderMenuItem: func.isRequired,
  RenderHome: func.isRequired,
  RenderPage: func.isRequired,
  modules: arrayOf(shape({
    id: string,
  })).isRequired,
};

export default Body;
