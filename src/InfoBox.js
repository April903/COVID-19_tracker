import React from "react";
import "./InfoBox.css";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({
  title,
  cases,
  active,
  isInfected,
  isRecovered,
  isDeaths,
  total,
  ...props
}) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isInfected && "infoBox--red"
      } ${isRecovered && "infoBox--green"} ${isDeaths && "infoBox--grey"}`}
    >
      <CardContent>
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>

        <h2
          className={`infoBox__cases ${isInfected && "infoBox__cases--red"} ${
            isRecovered && "infoBox__cases--green"
          } ${isDeaths && "infoBox__cases--grey"}`}
        >
          {cases}
        </h2>

        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
