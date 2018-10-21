import React, { Component } from 'react'
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  Divider,
  IconButton
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { mailFolderListItems } from './titleData'

class PersistentDrawer extends Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true })
  };

  handleDrawerClose = () => {
    this.setState({ open: false })
  };

  render () {
    const { open } = this.state

    const drawer = (
      <Drawer open={open}>
        <div>
          <IconButton onClick={this.handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mailFolderListItems}</List>
      </Drawer>
    )

    return (
      <div>
        <div>
          <AppBar>
            <Toolbar disableGutters={!open}>
              <IconButton color='inherit' onClick={this.handleDrawerOpen}>
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          {drawer}
        </div>
      </div>
    )
  }
}

export default PersistentDrawer
