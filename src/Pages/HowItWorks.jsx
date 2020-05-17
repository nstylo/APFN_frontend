import React from "react"
import styled from "styled-components"
import SvgIcon from '@material-ui/core/SvgIcon';

import { Grid, Typography } from "@material-ui/core"
import { useTheme } from "@material-ui/core/styles"

import { ReactComponent as UParagraphRect } from "../Assets/ParagraphRect.svg"
import { ReactComponent as UTenantButton } from "../Assets/TenantButton.svg"
import { ReactComponent as UHostButton } from "../Assets/HostButton.svg"
import { ReactComponent as UTenantPath } from "../Assets/TenantPath.svg"
import { ReactComponent as UHostPath } from "../Assets/HostPath.svg"
import { ReactComponent as UIntersectionCircles } from "../Assets/IntersectionCircles.svg"

// for testing purposes
import Clouds from "../Assets/Clouds.png"

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
      <TenantPath/>
      <HostPath/>
      <IntersectionCircles/>
      <Section left="135px" right="135px">
        <Grid container spacing={6}>
        <Step img={Clouds} header={"step 1"} text={"aosdhah"} imgleft />
        </Grid>
      </Section>
      </Section>
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
  left:255px;

  @media (min-width: 1920px) {
    left: calc(155px + (100vw - 1920px) / 2);
  }
`
const HostPath = styled(UHostPath)`
  position: absolute;
  top:1070px;
  left:954.84px;

  @media (min-width: 1920px) {
    left: calc(954.84px + (100vw - 1920px) / 2);
  }
`
const IntersectionCircles = styled(UIntersectionCircles)`
  position: absolute;
  top:915px;
  left:168px;

  @media (min-width: 1920px) {
    left: calc(168px + (100vw - 1920px) / 2);
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
const UStep = ({ img, header, text, imgleft, className }) => {
  const theme = useTheme()

  return (
    <Grid item xs={6} className={className}>
    {imgleft ? <img src={img} alt={"photo of" + header} />
    :
    <Typography variant="h3">{header}</Typography> }
    {imgleft ? <Typography variant="h3">{header}</Typography> : <P>{text}</P> }
    {imgleft ? <P>{text}</P> : <img src={img} alt={"photo of" + header} />}  
    </Grid>
  )
}

const Step = styled(UStep)`
  img {
    border-radius: 50px;
    width: 100%;
    height: auto;
    max-width: 305px;
    max-height: 310px;
  }

  p {
    margin: 5px 0;
  }
`