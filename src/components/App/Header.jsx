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
import { string, func } from '../common/prop-types';
import GithubToolbarIcon from './GithubToolbarIcon';

const Header = ({ title, onMenuToggle }) => (
  <header>
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
  </header>
);

Header.propTypes = {
  title: string.isRequired,
  onMenuToggle: func.isRequired,
};

export default Header;
