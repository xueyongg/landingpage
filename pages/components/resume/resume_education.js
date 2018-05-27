import React, { Component } from "react";
import {
  Modal,
  Header,
  Segment,
  Grid,
  Image,
  Button,
  List,
  Icon,
  Input,
  Menu,
  Container,
  Form,
  Item,
  Label
} from "semantic-ui-react";
import Link from "next/link";
const data = require("../../../static/assets/data.json");

export default class Resume_education extends Component {
  render() {
    return (
      <div>
        <Container
          style={{
            padding: "96px 16px 24px 16px"
          }}
        >
          {/* Education  |  Description */}
          <Grid>
            <Grid.Column width={5}>
              <Header as="h2" textAlign="left">
                <Icon name="student" />
                <Header.Content>Education</Header.Content>
              </Header>
            </Grid.Column>
            <Grid.Column width={11}>
              <Item.Group divided>
                {data.resume.education.description.map((element, index) => {
                  let { school, academicFocus, date, description } = element;
                  return (
                    <Item key={index}>
                      <Item.Content>
                        <Item.Header>{school}</Item.Header>
                        <Item.Meta>
                          <p>{academicFocus} </p>
                        </Item.Meta>
                        <Item.Meta>{date}</Item.Meta>
                        <Item.Description>
                          <List size="medium">
                            {description.map((des, i) => {
                              return <List.Item key={i}>{des}</List.Item>;
                            })}
                          </List>
                        </Item.Description>
                      </Item.Content>
                      <List.Header />
                      {/* <Item.Description floated="right">
                            {date}
                          </Item.Description> */}
                    </Item>
                  );
                })}
              </Item.Group>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}
