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
  Menu
} from "semantic-ui-react";
import Link from "next/link";
const data = require("../../../static/assets/data.json");

export default class About_funfact extends Component {
  render() {
    const about = data.about;
    return (
      <div>
        <Container style={{ padding: "8em 2em" }}>
          <Grid textAlign="center">
            <Header as="h2">
              <Icon name={about.funfact.icon} />
              <Header.Content>{about.funfact.header} </Header.Content>
            </Header>
            <Grid.Row>
              <Grid.Column width={16} textAlign="left">
                {about.funfact.description.map((des, i) => {
                  return (
                    <h4
                      key={i}
                      style={{
                        fontFamily: "proxima-nova",
                        fontSize: 26,
                        lineHeight: "1.4em",
                        fontWeight: 200
                      }}
                    >
                      {des}
                    </h4>
                  );
                })}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}
