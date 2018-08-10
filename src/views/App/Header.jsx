import React from 'react';
import { Link } from 'react-router-dom';
import {
  Toolbar,
  ToolbarFixedAdjust,
  ToolbarMenuIcon,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
} from 'rmwc/Toolbar';
import { string, func } from '../../lib/prop-types';
import GithubToolbarIcon from './GithubToolbarIcon';

import './Header.scss';

const Header = ({ title, onMenuToggle }) => (
  <div>
    <Toolbar fixed waterfall>
      <ToolbarRow>
        <ToolbarSection alignStart>
          <ToolbarMenuIcon use="menu" onClick={onMenuToggle} />
          <Link to="/">
            <ToolbarTitle>
              {title}
            </ToolbarTitle>
          </Link>
        </ToolbarSection>
        <ToolbarSection alignEnd>
          <GithubToolbarIcon />
        </ToolbarSection>
      </ToolbarRow>
    </Toolbar>

    <ToolbarFixedAdjust />
  </div>
);

Header.propTypes = {
  title: string.isRequired,
  onMenuToggle: func.isRequired,
};

export default Header;
