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
  static async getInitialProps({ pathname }) {
    return { pathname };
  }

  render() {
    return (
      <div>
        <TopMenu currentPage={this.props.pathname} />
        <Image
          src="../static/images/portfolio.jpg"
          fluid
          style={{ opacity: "0.5", maxHeight: 750 }}
        />
        <Container
          text
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <Header
            as="h1"
            textAlign="center"
            style={{
              textTransform: "uppercase",
              fontSize: 52,
              fontWight: 700
            }}
          >
            My humble portfolio
          </Header>
        </Container>
        <Container>
          <Grid celled stackable columns={3}>
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
