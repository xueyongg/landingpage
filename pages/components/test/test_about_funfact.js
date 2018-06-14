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
    const funfact = data.about.funfact;

    return (
      <div>
        <Container style={{ padding: "8em 0em", margin: 0 }}>
          <Grid textAlign="center" stackable>
            <Header as="h2">
              <Icon name={funfact.icon} />
              <Header.Content>{funfact.header} </Header.Content>
            </Header>
            <Grid.Row columns={4} stretched>
              <Grid.Column width={4}>
                <Image
                  src={"/static/images/about/" + funfact.image}
                  alt={"/static/images/about/" + funfact.image}
                  rounded
                  style={{ width: "100%", borderWidth: "thin" }}
                  bordered
                />
              </Grid.Column>
              <Grid.Column width={4}>
                <Segment basic>
                  {/* <Icon name="percent" size="huge" circular/> */}
                  <Image
                    src="/static/images/tumblr_nttd5mxlym1rjoj3ho2_r1_500.jpg"
                    size="tiny"
                    centered
                    circular
                  />
                </Segment>
                <Segment basic>
                  {/* <Icon name="percent" size="huge" circular/> */}
                  <Image
                    src="/static/images/tumblr_nttd5mxlym1rjoj3ho2_r1_500.jpg"
                    size="tiny"
                    centered
                    circular
                  />
                </Segment>
                <Segment basic>
                  {/* <Icon name="percent" size="huge" circular/> */}
                  <Image
                    src="/static/images/tumblr_nttd5mxlym1rjoj3ho2_r1_500.jpg"
                    size="tiny"
                    centered
                    circular
                  />
                </Segment>
              </Grid.Column>
              <Grid.Column width={4}>
                <Segment basic>
                  {/* <Icon name="percent" size="huge" circular/> */}
                  <Image
                    src="/static/images/tumblr_nttd5mxlym1rjoj3ho2_r1_500.jpg"
                    size="tiny"
                    centered
                    circular
                  />
                </Segment>
                <Segment basic>
                  {/* <Icon name="percent" size="huge" circular/> */}
                  <Image
                    src="/static/images/tumblr_nttd5mxlym1rjoj3ho2_r1_500.jpg"
                    size="tiny"
                    centered
                    circular
                  />
                </Segment>
                <Segment basic>
                  {/* <Icon name="percent" size="huge" circular/> */}
                  <Image
                    src="/static/images/tumblr_nttd5mxlym1rjoj3ho2_r1_500.jpg"
                    size="tiny"
                    centered
                    circular
                  />
                </Segment>
              </Grid.Column>
              <Grid.Column width={4}>
                <Segment basic>
                  {/* <Icon name="percent" size="huge" circular/> */}
                  <Image
                    src="/static/images/tumblr_nttd5mxlym1rjoj3ho2_r1_500.jpg"
                    size="tiny"
                    centered
                    circular
                  />
                </Segment>
                <Segment basic>
                  {/* <Icon name="percent" size="huge" circular/> */}
                  <Image
                    src="/static/images/tumblr_nttd5mxlym1rjoj3ho2_r1_500.jpg"
                    size="tiny"
                    centered
                    circular
                  />
                </Segment>
                <Segment basic>
                  {/* <Icon name="percent" size="huge" circular/> */}
                  <Image
                    src="/static/images/tumblr_nttd5mxlym1rjoj3ho2_r1_500.jpg"
                    size="tiny"
                    centered
                    circular
                  />
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}
