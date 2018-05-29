import React, { Component } from "react";
import {
  Modal,
  Header,
  Segment,
  Grid,
  Image,
  Container,
  Button,
  List,
  Icon,
  Input,
  Menu,
  Responsive
} from "semantic-ui-react";
import Link from "next/link";
const data = require("../../../static/assets/data.json");

export default class About_photos extends Component {
  render() {
    let about = data.about;
    return (
      <div>
        <Responsive
          minWidth={
            Responsive.onlyTablet.minWidth
              ? Responsive.onlyTablet.minWidth
              : 500
          }
          maxWidth={
            Responsive.onlyWidescreen.maxWidth
              ? Responsive.onlyWidescreen.maxWidth
              : 2500
          }
        >
          <Grid>
            <Grid.Row columns={3} style={{ padding: 0 }}>
              {about.images.map((image, i) => {
                return (
                  <Grid.Column style={{ padding: 0 }} key={i}>
                    <Image
                      src={"/static/images/about/" + image}
                      alt={image}
                    />
                  </Grid.Column>
                );
              })}
            </Grid.Row>
          </Grid>
        </Responsive>
        <Responsive minWidth={150} maxWidth={Responsive.onlyMobile.maxWidth}>
          <Grid>
            <Grid.Row columns={2} style={{ padding: 0 }}>
            {about.images.map((image, i) => {
                return (
                  <Grid.Column style={{ padding: 0 }} key={i}>
                    <Image
                      src={"/static/images/about/" + image}
                      alt={image}
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
