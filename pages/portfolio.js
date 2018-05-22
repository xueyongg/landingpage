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
  Label,
  Input,
  Menu
} from "semantic-ui-react";
import Link from "next/link";
import { TopMenu } from "./components/menu";
import { BottomMenu } from "./components/bottom_menu";

export default class Portfolio extends Component {
  static async getInitialProps({ query }) {
    return { query };
  }

  render() {
    return (
      <div>
        <TopMenu />
        <Image src="../static/images/neil-rosenstech-516210-unsplash.jpg" />
        <Container>
          <Header as="h1" textAlign="center">
            Portfolio
          </Header>
          <Grid celled stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header as="h4" content="Date and duration of project" />

                <p>Date and duration of project</p>
              </Grid.Column>
              <Grid.Column width={10}>
                <Header as="h4" content="Project Description and screenshots" />
                <p>Description comes here</p>
                <p>Screenshots comes here</p>
                <Grid>
                  <Grid.Row columns={3}>
                    <Grid.Column>
                      <Image
                        src="https://react.semantic-ui.com/assets/images/wireframe/image.png"
                        rounded
                      />
                    </Grid.Column>
                    <Grid.Column>
                      <Image
                        src="https://react.semantic-ui.com/assets/images/wireframe/image.png"
                        rounded
                      />
                    </Grid.Column>
                    <Grid.Column>
                      <Image
                        src="https://react.semantic-ui.com/assets/images/wireframe/image.png"
                        rounded
                      />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header as="h4" content="Skills" />
                <List link>
                  <List.Item>
                    <Label>
                      <Icon name="mail" /> Javascript
                    </Label>
                  </List.Item>
                  <List.Item>
                    <Label>
                      <Icon name="mail" /> BootStrap
                    </Label>
                  </List.Item>
                  <List.Item>
                    <Label>
                      <Icon name="mail" /> Nodejs
                    </Label>
                  </List.Item>
                  <List.Item>
                    <Label>
                      <Icon name="mail" /> Semantic UI
                    </Label>
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3}>
                <Header as="h4" content="Date and duration of project" />
                <p>Date and duration of project</p>
              </Grid.Column>
              <Grid.Column width={10}>
                <Header as="h4" content="Project Description and screenshots" />
                <p>Description comes here</p>
                <p>Screenshots comes here</p>
                <Grid>
                  <Grid.Row columns={3}>
                    <Grid.Column>
                      <Image
                        src="https://react.semantic-ui.com/assets/images/wireframe/image.png"
                        rounded
                      />
                    </Grid.Column>
                    <Grid.Column>
                      <Image
                        src="https://react.semantic-ui.com/assets/images/wireframe/image.png"
                        rounded
                      />
                    </Grid.Column>
                    <Grid.Column>
                      <Image
                        src="https://react.semantic-ui.com/assets/images/wireframe/image.png"
                        rounded
                      />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header as="h4" content="Skills" />
                <List link>
                  <List.Item>
                    <Label>
                      <Icon name="mail" /> Javascript
                    </Label>
                  </List.Item>
                  <List.Item>
                    <Label>
                      <Icon name="mail" /> BootStrap
                    </Label>
                  </List.Item>
                  <List.Item>
                    <Label>
                      <Icon name="mail" /> Nodejs
                    </Label>
                  </List.Item>
                  <List.Item>
                    <Label>
                      <Icon name="mail" /> Semantic UI
                    </Label>
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <BottomMenu />
      </div>
    );
  }
}
