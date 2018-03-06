import React, { Component } from 'react';
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

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      isMobile: false,
      isMenuOpen: true,
    };
  }

  render() {
    const { input } = this.state;
    return (
      <Theme className="app__root" tag="div">

        <Toolbar fixed waterfall>
          <ToolbarRow>
            <ToolbarSection alignStart>
              <ToolbarTitle>Web Development tools</ToolbarTitle>
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
                    fill="#ffffff"
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
              <ListItem activated>
                <ListItemGraphic use="compare_arrows" />
                <ListItemText>URL encoder/decoder</ListItemText>
              </ListItem>
              <ListItem className="mdc-list-item--disabled">
                <ListItemGraphic use="spellcheck" />
                <ListItemText>
                  JSON validator
                  <ListItemSecondaryText>Not available yet</ListItemSecondaryText>
                </ListItemText>
              </ListItem>
              <ListItem className="mdc-list-item--disabled">
                <ListItemGraphic use="code" />
                <ListItemText>
                  Base64 encoder/decoder
                  <ListItemSecondaryText>Not available yet</ListItemSecondaryText>
                </ListItemText>
              </ListItem>
              <ListItem className="mdc-list-item--disabled">
                <ListItemGraphic use="developer_mode" />
                <ListItemText>
                  Base64 image
                  <ListItemSecondaryText>Not available yet</ListItemSecondaryText>
                </ListItemText>
              </ListItem>
              <ListItem className="mdc-list-item--disabled">
                <ListItemGraphic use="colorize" />
                <ListItemText>
                  Unicode characters picker
                  <ListItemSecondaryText>Not available yet</ListItemSecondaryText>
                </ListItemText>
              </ListItem>
              <ListItem className="mdc-list-item--disabled">
                <ListItemGraphic use="straighten" />
                <ListItemText>
                  CSS minifier/gzipper
                  <ListItemSecondaryText>Not available yet</ListItemSecondaryText>
                </ListItemText>
              </ListItem>
              <ListItem className="mdc-list-item--disabled">
                <ListItemGraphic use="insert_photo" />
                <ListItemText>
                  Favicon generator
                  <ListItemSecondaryText>Not available yet</ListItemSecondaryText>
                </ListItemText>
              </ListItem>
              <ListItem className="mdc-list-item--disabled">
                <ListItemGraphic use="assignment_turned_in" />
                <ListItemText>
                  Travis.yml validator
                  <ListItemSecondaryText>Not available yet</ListItemSecondaryText>
                </ListItemText>
              </ListItem>
              <ListItem className="mdc-list-item--disabled">
                <ListItemGraphic use="visibility_off" />
                <ListItemText>
                  Password generator
                  <ListItemSecondaryText>Not available yet</ListItemSecondaryText>
                </ListItemText>
              </ListItem>
              <ListItem className="mdc-list-item--disabled">
                <ListItemGraphic use="photo_camera" />
                <ListItemText>
                  Tilt–shift generator
                  <ListItemSecondaryText>Not available yet</ListItemSecondaryText>
                </ListItemText>
              </ListItem>
            </DrawerContent>
          </Drawer>

          <main className="app__content-main">
            <Typography tag="h1" use="display1">URL Encoder/Decoder</Typography>

            <TextField textarea fullwidth label="Text to encode or decode" rows="12" onChange={e => this.onInputChange(e)} value={this.state.input} />
            <div className="tool-toolbar">
              <Button raised onClick={() => this.onEncodeButtonClick()} disabled={input === ''}>Encode</Button>
              <Button unelevated onClick={() => this.onDecodeButtonClick()} disabled={input === decode(input)}>Decode</Button>
            </div>
          </main>

        </div>
      </Theme>
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

export default App;
