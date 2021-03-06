import React, { Component } from "react";
import { Header, Grid, List, Icon, Container, Item } from "semantic-ui-react";
const data = require("../../../static/assets/data.json");

export default class Resume_education extends Component {
  render() {
    return (
      <div>
        <Container
          style={{
            padding: "4em 1em 2em 1em"
          }}
        >
          {/* Education  |  Description */}
          <Grid stackable>
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
