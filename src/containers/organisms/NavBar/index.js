import React, { Component } from 'react'
import { Hidden, withWidth } from '@material-ui/core'
import { NavWrapper, NavItemWrapper, NavItem } from './style'

class NavBar extends Component {
  render () {
    return (
      <Hidden xsDown>
        <NavWrapper container justify={'flex-end'} alignItems={'center'}>
          <NavItemWrapper item xs={2}>
            <NavItem>HOME</NavItem>
          </NavItemWrapper>
          <NavItemWrapper item xs={2}>
            <NavItem>PROJECTS</NavItem>
          </NavItemWrapper>
          <NavItemWrapper item xs={2}>
            <NavItem>ABOUT</NavItem>
          </NavItemWrapper>
        </NavWrapper>
      </Hidden>
    )
  }
}

export default withWidth()(NavBar)
