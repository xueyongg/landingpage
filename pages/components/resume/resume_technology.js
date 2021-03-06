import React, { Component } from "react";
import { Header, Grid, List, Icon, Container } from "semantic-ui-react";

const data = require("../../../static/assets/data.json");

export default class Resume_technology extends Component {
  render() {
    return (
      <div>
        <Container
          style={{
            padding: "6em 1em 2em 1em"
          }}
        >
          <Grid stackable>
            <Grid.Row columns={3}>
              <Grid.Column>
                <Header as="h2" textAlign="left">
                  <Icon name="qrcode" />
                  <Header.Content>Technologies</Header.Content>
                </Header>
              </Grid.Column>
              <Grid.Column>
                <Header as="h3">Core Technology</Header>
                <List bulleted size="huge">
                  {data.resume.technology.core_technology.map(
                    (element, index) => {
                      return <List.Item key={index}>{element.name}</List.Item>;
                    }
                  )}
                </List>
              </Grid.Column>
              <Grid.Column>
                <Header as="h3">Experienced with</Header>
                <List bulleted size="huge">
                  {data.resume.technology.experienced_with.map(
                    (element, index) => {
                      return <List.Item key={index}>{element.name}</List.Item>;
                    }
                  )}
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}
