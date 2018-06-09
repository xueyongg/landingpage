import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";
const data = require("../../../static/assets/data.json");

export default class About_instagram_mobile extends Component {
  render() {
    let instagram = data.about.instagram;
    return (
      <div>
        <Grid.Row columns={2}>
          {instagram.map((element, i) => {
            if (Number(i) < 2) {
              return (
                <Grid.Column key={i}>
                  <Image
                    size="big"
                    src={"/static/images/about/instagram/" + element}
                    alt={"/static/images/about/instagram/" + element}
                  />
                </Grid.Column>
              );
            }
          })}
        </Grid.Row>
        <Grid.Row columns={2}>
          {instagram.map((element, i) => {
            if (2 <= Number(i) < 4) {
              return (
                <Grid.Column key={i}>
                  <Image
                    size="big"
                    src={"/static/images/about/instagram/" + element}
                    alt={"/static/images/about/instagram/" + element}
                  />
                </Grid.Column>
              );
            }
          })}
        </Grid.Row>
        <Grid.Row columns={2}>
          {instagram.map((element, i) => {
            if (4 <= Number(i) < 6) {
              return (
                <Grid.Column key={i}>
                  <Image
                    size="big"
                    src={"/static/images/about/instagram/" + element}
                    alt={"/static/images/about/instagram/" + element}
                  />
                </Grid.Column>
              );
            }
          })}
        </Grid.Row>
        <Grid.Row columns={2}>
          {instagram.map((element, i) => {
            if (6 <= Number(i) < 8) {
              return (
                <Grid.Column key={i}>
                  <Image
                    size="big"
                    src={"/static/images/about/instagram/" + element}
                    alt={"/static/images/about/instagram/" + element}
                  />
                </Grid.Column>
              );
            }
          })}
        </Grid.Row>
        <Grid.Row columns={2}>
          {instagram.map((element, i) => {
            if (8 <= Number(i) < 10) {
              return (
                <Grid.Column key={i}>
                  <Image
                    size="big"
                    src={"/static/images/about/instagram/" + element}
                    alt={"/static/images/about/instagram/" + element}
                  />
                </Grid.Column>
              );
            }
          })}
        </Grid.Row>
      </div>
    );
  }
}
