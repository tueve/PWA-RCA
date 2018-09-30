import React, { Fragment } from 'react'

import { Grid, Hidden } from '@material-ui/core'
import { A, Logo } from 'components/atoms'
import { NavBar, BurgerMenu } from 'containers/organisms'
import LogoImg from './logo.png'

class Header extends React.Component {
  render () {
    return (
      <Fragment>
        <Grid container>
          <Grid item xs={3}>
            <Hidden xsDown>
              <A href='/'>
                <Logo src={LogoImg} alt='Logo' />
              </A>
            </Hidden>
          </Grid>
          <Grid item xs={9} container>
            <NavBar />
          </Grid>
        </Grid>
        <Hidden smUp>
          <BurgerMenu />
        </Hidden>
      </Fragment>
    )
  }
}

export default Header
