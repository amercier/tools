import React from 'react';
import { Link } from 'react-router-dom';
import { SimpleListItem } from 'rmwc/List';
import { bool, string, func, shape } from 'prop-types';

const MenuItem = ({ active, module, onClick }) => {
  const {
    id, title, icon, component,
  } = module;

  // Disabled
  if (!component) {
    return (
      <SimpleListItem
        graphic={icon}
        text={title}
        ripple={false}
        title="Not available yet"
        className="mdc-list-item--disabled"
      />
    );
  }

  // Enabled + active
  if (active) {
    return <SimpleListItem graphic={icon} text={title} activated ripple={false} />;
  }

  // Enabled + inactive
  return (
    <Link to={id} onClick={onClick}>
      <SimpleListItem graphic={icon} text={title} />
    </Link>
  );
};

MenuItem.propTypes = {
  active: bool,
  module: shape({
    id: string,
    title: string,
    description: string,
    component: func,
  }).isRequired,
  onClick: func.isRequired,
};

MenuItem.defaultProps = {
  active: false,
};

export default MenuItem;
