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
import { PageHeader } from "./components/pageHeader";

export default class Portfolio extends Component {
  state = {
    currentPage: "portfolio"
  };

  render() {
    return (
      <div>
        <TopMenu currentPage={this.state.currentPage} />
        <PageHeader
          mobile={false}
          url={this.state.currentPage}
          headerColor={"black"}
          subHeaderColor={"black"}
          imageName={"portfoliotest"}
          subHeaderContent={"Take a look at what I've done"}
          headerContent={"My humble portfolio"}
          additionalSegmentStyle={{}}
          additionalHeaderStyle={{ fontWight: 700, zIndex: 1 }}
          additionalSubHeaderStyle={{ zIndex: 1 }}
        />
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
        <BottomMenu currentPage={this.state.currentPage} />
      </div>
    );
  }
}
