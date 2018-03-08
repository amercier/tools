import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'rmwc/Button';
import {
  Drawer,
  DrawerContent
} from 'rmwc/Drawer';
import {
  ListItem,
  ListItemGraphic,
  ListItemText,
  ListItemSecondaryText
} from 'rmwc/List';
import { TextField } from 'rmwc/TextField';
import { Theme } from 'rmwc/Theme';
import {
  Toolbar,
  ToolbarFixedAdjust,
  ToolbarMenuIcon,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
  ToolbarIcon
} from 'rmwc/Toolbar';
import { Typography } from 'rmwc/Typography';
import './App.css';


function encode(value) {
  return encodeURIComponent(value)
    .replace(/'/g, '%27')
    .replace(/"/g, '%22');
}

function decode(value) {
  return decodeURIComponent(value.replace(/\+/g, ' '));
}

class UrlEncoderDecoder extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  render() {
    const { input } = this.state;
    return (
      <div>
        <Typography tag="h1" use="display1">URL encoder/decoder</Typography>

        <TextField textarea fullwidth label="Text to encode or decode" rows="12" onChange={e => this.onInputChange(e)} value={this.state.input} />
        <div className="tool-toolbar">
          <Button raised onClick={() => this.onEncodeButtonClick()} disabled={input === ''}>Encode</Button>
          <Button unelevated onClick={() => this.onDecodeButtonClick()} disabled={input === decode(input)}>Decode</Button>
        </div>
      </div>
    );
  }

  onInputChange({ target }) {
    this.setState({ input: target.value });
  }

  onEncodeButtonClick() {
    this.setState({ input: encode(this.state.input) });
  }

  onDecodeButtonClick() {
    this.setState({ input: decode(this.state.input) });
  }
}

const pages = [
  {
    id: 'url-encoder',
    title: 'URL encoder/decoder',
    icon: 'compare_arrows',
    component: UrlEncoderDecoder,
  },
  {
    title: 'JSON validator',
    icon: 'spellcheck',
  },
  {
    title: 'Base64 encoder/decoder',
    icon: 'code',
  },
  {
    title: 'Base64 image',
    icon: 'developer_mode',
  },
  {
    title: 'Unicode characters picker',
    icon: 'colorize',
  },
  {
    title: 'CSS minifier/gzipper',
    icon: 'straighten',
  },
  {
    title: 'Favicon generator',
    icon: 'insert_photo',
  },
  {
    title: 'Travis.yml validator',
    icon: 'assignment_turned_in',
  },
  {
    title: 'Password generator',
    icon: 'visibility_off',
  },
  {
    title: 'Tilt–shift generator',
    icon: 'photo_camera',
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      isMobile: false,
      isMenuOpen: true,
    };
  }

  render() {
    return (
      <Router>
        <Theme className="app__root" tag="div">

          <Toolbar fixed waterfall>
            <ToolbarRow>
              <ToolbarSection alignStart>
                <ToolbarMenuIcon use="menu" onClick={() => this.toggleMenu()}/>
                <Link to={'/'}>
                  <ToolbarTitle>Web Development tools</ToolbarTitle>
                </Link>
              </ToolbarSection>
              <ToolbarSection alignEnd>
              <ToolbarIcon
                tag="a"
                href="https://github.com/amercier/tools"
                use={
                  <svg
                    style={{ width: '24px', height: '24px' }}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="inherit"
                      d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                    />
                  </svg>
                }
              />
              </ToolbarSection>
            </ToolbarRow>
          </Toolbar>

          <ToolbarFixedAdjust />

          <div className="app__content">
            <Drawer
              persistent={!this.state.isMobile}
              temporary={this.state.isMobile}
              open={this.state.isMenuOpen}
              onClose={() => this.setState({ isMenuOpen: false })}
            >
              <DrawerContent twoLine>
                {pages.map(({ id, title, icon, component}) => {
                  if (component) {
                    return (
                      <Link to={id}>
                        <ListItem>
                          <ListItemGraphic use={icon} />
                          <ListItemText>{title}</ListItemText>
                        </ListItem>
                      </Link>
                    );
                  } else {
                    return (
                      <ListItem className="mdc-list-item--disabled">
                        <ListItemGraphic use={icon} />
                        <ListItemText>
                          {title}
                          <ListItemSecondaryText>Not available yet</ListItemSecondaryText>
                        </ListItemText>
                      </ListItem>
                    );
                  }
                })}
              </DrawerContent>
            </Drawer>

            <main className="app__content-main">
              <Route exact path="/" component={UrlEncoderDecoder} />
              <Route exact path="/url-encoder" component={UrlEncoderDecoder} />
            </main>
          </div>

        </Theme>
      </Router>
    );
  }

  toggleMenu() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }
}

export default App;
