import styled from 'styled-components'
import { Grid, Button } from '@material-ui/core'

export const NavWrapper = styled(Grid)`
  height: 65px;
`

export const NavItemWrapper = styled(Grid)`
  display: flex;
  height: 100%;
  align-items: middle;

  button: {
    border-radius: 0;
  }
`
export const NavItem = styled(Button)`
  && {
    width: 100%;
    font-weight: bold;
    border-radius: 0;
  }
`
