import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { Gallery, Tag, Button, Attribute } from "lib"
import { Typography, Avatar, Card, CardContent } from "@material-ui/core"
import styled from "styled-components"
import DatePicker from "react-datepicker"

import "lib/react-datepicker.css"
import {
  dateToSlashedString,
  numberToCurrencyString,
  dateDiffInDays,
} from "helpers"

export default () => {
  const { id } = useParams()
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(null)

  return (
    <div>
      <div style={{ marginTop: "200px " }}>
        {id}
        <Gallery
          images={[
            {
              src:
                "https://image.shutterstock.com/z/stock-photo-beautiful-exterior-of-newly-built-luxury-home-yard-with-green-grass-and-walkway-lead-to-ornately-529108441.jpg",
            },
            {
              src:
                "https://image.shutterstock.com/z/stock-photo-beautiful-exterior-of-newly-built-luxury-home-yard-with-green-grass-and-walkway-lead-to-ornately-529108441.jpg",
            },
            {
              src:
                "https://image.shutterstock.com/z/stock-photo-beautiful-exterior-of-newly-built-luxury-home-yard-with-green-grass-and-walkway-lead-to-ornately-529108441.jpg",
            },
          ]}
        />
      </div>
      <PriceLocation price={13} location="Rochumsbuurt, Eindhoven" />
      <Separator />
      <Introduction
        avatar="https://image.shutterstock.com/z/stock-photo-beautiful-exterior-of-newly-built-luxury-home-yard-with-green-grass-and-walkway-lead-to-ornately-529108441.jpg"
        hostname="Niklas Stylianou"
        since="January 2020"
        tags={["Student", "Calm", "Musician", "Moview fanatic", "Dutch"]}
        introtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim faucibus morbi tellus sed at arcu eu lobortis non. At mus felis vel tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim faucibus morbi tellus sed at arcu eu lobortis non. At mus felis vel tellus."
      />
      <Attribute type="family_home" />
      <Attribute type="no_smoking" />
      <Attribute type="hangers" />
      <DatePicker
        selected={startDate}
        onChange={dates => {
          const [start, end] = dates
          setStartDate(start)
          setEndDate(end)
        }}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
      />
      <SettlementView
        arrivalDate={startDate}
        departureDate={endDate}
        pricePerNight={12}
      />
    </div>
  )
}

const PriceLocation = ({ price, location }) => (
  <div>
    <Typography variant="h3" color="primary">
      {price}€ / Night
    </Typography>
    <Typography variant="subtitle2">{location}</Typography>
  </div>
)

const Separator = styled.hr`
  border-top: 1px solid #dbdbdb;
`

const IntroductionHeader = ({ avatar, hostname, since, tags, ...props }) => {
  return (
    <div {...props}>
      <Avatar
        src={avatar}
        alt={hostname}
        style={{
          width: "124px",
          height: "124px",
          float: "left",
          marginRight: "20px",
        }}
      />
      <Typography variant="h5" color="textPrimary">
        {hostname}
      </Typography>
      <h6
        style={{
          fontStyle: "italic",
          fontWeight: "300",
          color: "2D2D2D",
          margin: "0",
          fontSize: "18px",
        }}
      >
        Host since {since}
      </h6>
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "10px" }}>
        {tags.map(text => (
          <Tag text={text} style={{ marginRight: "10px", marginTop: "10px" }} />
        ))}
      </div>
    </div>
  )
}

const Introduction = ({ avatar, hostname, since, tags, introtext }) => {
  return (
    <div>
      <IntroductionHeader
        avatar={avatar}
        hostname={hostname}
        since={since}
        tags={tags}
        style={{ paddingBottom: "50px " }}
      />
      <Typography variant="h5" color="textPrimary">
        Short introduction
      </Typography>
      <Typography variant="body1" color="textPrimary">
        {introtext}
      </Typography>
      <Button
        style={{
          height: "46px",
          whiteSpace: "nowrap",
          marginTop: "40px",
          padding: "0 30px",
        }}
        variant="outlined"
        color="primary"
      >
        See profile
      </Button>
    </div>
  )
}

const Grid = styled.div``
const Row = styled.div`
  display: flex;
`
const Col = styled.div`
  flex: ${props => (props.size ? props.size : 1)};
`

const DateView = ({ header, date, subscript }) => {
  return (
    <div>
      <Typography variant="subtitle1" color="textPrimary">
        {header}
      </Typography>
      <Typography variant="body1" color="textPrimary">
        {date}
      </Typography>
      <Typography variant="subtitle1" color="primary">
        {subscript}
      </Typography>
    </div>
  )
}

const SettlementView = ({
  arrivalDate,
  departureDate,
  pricePerNight,
  avatarTenant,
  avatarHost,
}) => {
  const numberOfNights = dateDiffInDays(
    arrivalDate,
    departureDate ? departureDate : arrivalDate
  )

  const priceOfStay = numberOfNights * pricePerNight

  return (
    <Card elevation={10}>
      <CardContent>
        <Grid>
          <Row>
            <Col>
              <DateView
                header="Date of arrival"
                date={dateToSlashedString(arrivalDate)}
                subscript="Estimated date of arrival"
              />
            </Col>
            <Col>
              <DateView
                header="Date of departure"
                date={dateToSlashedString(
                  departureDate ? departureDate : arrivalDate
                )}
                subscript="Estimated date of departure"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Typography variant="subtitle1" color="textPrimary">
                Amount of nights
              </Typography>
              <Typography variant="body1" color="textPrimary">
                {numberOfNights}
              </Typography>
            </Col>
            <Col>
              <Typography variant="subtitle1" color="textPrimary">
                Price per night
              </Typography>
              <Typography variant="body1" color="textPrimary">
                {numberToCurrencyString(pricePerNight)}
              </Typography>
            </Col>
            <Col>
              <Typography variant="subtitle1" color="textPrimary">
                Price of stay
              </Typography>
              <Typography variant="body1" color="textPrimary">
                {numberToCurrencyString(priceOfStay)}
              </Typography>
            </Col>
          </Row>
        </Grid>
      </CardContent>
    </Card>
  )
}
