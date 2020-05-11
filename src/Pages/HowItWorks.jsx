import React from "react"
import styled from "styled-components"
import SvgIcon from '@material-ui/core/SvgIcon';

import { Grid, Typography } from "@material-ui/core"
import { useTheme } from "@material-ui/core/styles"

import { ReactComponent as UParagraphRect } from "../Assets/ParagraphRect.svg"
import { ReactComponent as UTenantButton } from "../Assets/TenantButton.svg"
import { ReactComponent as UHostButton } from "../Assets/HostButton.svg"
import { ReactComponent as UTenantPath } from "../Assets/TenantPath.svg"

export default () => {
  return (
    <Grid container>
      <TenantButton/>
      <HostButton/>
      <ParagraphRect/>
      <Section left="160px" top="280px" bottom="634px">
        <Typography variant="h1" color="primary">
          How It Works
        </Typography>
        <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur 
        sint occaecat cupidatat non proident, sunt in culpa qui 
        officia deserunt mollit anim id est laborum.
        </P>
      </Section>
      <TenantPath/>
    </Grid>
  )
}

const ParagraphRect = styled(UParagraphRect)`
  position: absolute;
  top: 430px;
`
const TenantButton = styled(UTenantButton)`
  position: absolute;
  top: 800px;
  left: 350px;

  @media (min-width: 1920px) {
    left: calc(350px + (100vw - 1920px) / 2);
  }

`
const HostButton = styled(UHostButton)`
  position: absolute;
  top:800px;
  left:1265px;

  @media (min-width: 1920px) {
    left: calc(1265px + (100vw - 1920px) / 2);
  }
`
const TenantPath = styled(UTenantPath)`
  position: absolute;
  top:1070px;
  left:208px;
  bottom:375px;

  @media (min-width: 1920px) {
    left: calc(155px + (100vw - 1920px) / 2);
  }
`

const P = styled.p`
  width: ${props => props.width};
`
const Section = styled(Grid).attrs(props => ({
  item: true,
  xs: 12,
}))`
  padding-left: ${props => props.left};
  padding-right: ${props => props.right};
  padding-top: ${props => props.top};
  padding-bottom: ${props => props.bottom};
`