import React, { Component } from "react";
import { Grid, Image, Responsive } from "semantic-ui-react";

const data = require("../../../static/assets/data.json");

export default class About_photos extends Component {
  render() {
    let about = data.about;
    return (
      <div>
        <Responsive
          maxWidth={
            Responsive.onlyWidescreen.maxWidth
              ? Responsive.onlyWidescreen.maxWidth
              : 2500
          }
          minWidth={
            Responsive.onlyTablet.minWidth
              ? Responsive.onlyTablet.minWidth
              : 500
          }
        >
          <Grid>
            <Grid.Row columns={3} style={{ padding: 0 }}>
              {about.images.map((image, i) => {
                return (
                  <Grid.Column key={i} style={{ padding: 0 }}>
                    <Image
                      alt={"/static/images/about/phone/" + image}
                      src={"/static/images/about/phone/" + image}
                    />
                  </Grid.Column>
                );
              })}
            </Grid.Row>
          </Grid>
        </Responsive>
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth} minWidth={150}>
          <Grid>
            <Grid.Row columns={2} style={{ padding: 0 }}>
              {about.images.map((image, i) => {
                return (
                  <Grid.Column key={i} style={{ padding: 0 }}>
                    <Image
                      alt={"/static/images/about/phone/" + image}
                      src={"/static/images/about/phone/" + image}
                    />
                  </Grid.Column>
                );
              })}
            </Grid.Row>
          </Grid>
        </Responsive>
      </div>
    );
  }
}
