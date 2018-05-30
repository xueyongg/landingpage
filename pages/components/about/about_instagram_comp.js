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

export default class About_instagram_computer extends Component {
  render() {
    let instagram = data.about.instagram;
    return (
      <div>
        <Grid.Row columns={5}>
          {instagram.map((element, i) => {
            if (Number(i) < 5) {
              return (
                <Grid.Column key={i}>
                  <Image
                    src={"/static/images/about/instagram/" + element}
                    alt={"/static/images/about/instagram/" + element}
                  />
                </Grid.Column>
              );
            }
          })}
        </Grid.Row>
        <Grid.Row columns={5}>
          {instagram.map((element, i) => {
            if (i > 4) {
              return (
                <Grid.Column key={i}>
                  <Image
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
