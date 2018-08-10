import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  bool, string, func, arrayOf, shape,
} from '../../lib/prop-types';

const Body = ({
  RenderMenu, RenderMenuItem, RenderHome, RenderPage,
  modules, isNarrow, ...menuProps
}) => {
  const styles = {
    container: {
      display: 'flex',
    },
    main: {
      flex: '1 1 auto',
      padding: isNarrow ? '1rem' : '1rem 2rem',
      overflowX: 'hidden',
    },
  };
  return (
    <div style={styles.container}>
      <RenderMenu
        RenderMenuItem={RenderMenuItem}
        modules={modules}
        isNarrow={isNarrow}
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
  isNarrow: bool.isRequired,
  modules: arrayOf(shape({
    id: string,
  })).isRequired,
};

export default Body;
