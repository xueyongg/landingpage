import React, { Component } from "react";
import {
  Header,
  Grid,
  List,
  Icon,
  Container,
  Item,
  Label
} from "semantic-ui-react";
const data = require("../../../static/assets/data.json");

export default class Resume_work extends Component {
  render() {
    return (
      <div>
        <Container
          style={{
            padding: "4em 1em 2em 1em"
          }}
        >
          <Grid stackable>
            <Grid.Column width={5}>
              <Header as="h2" textAlign="left">
                <Icon name="users" />
                <Header.Content>Work Experience</Header.Content>
              </Header>
            </Grid.Column>
            <Grid.Column width={11}>
              <Item.Group divided>
                {data.resume.work_experience.experiences.map(
                  (element, index) => {
                    let {
                      company,
                      companyWebsite,
                      jobTitle,
                      jobDescriptionLink,
                      date,

                      description,
                      skills
                    } = element;
                    if (element.company) {
                      return (
                        <Item key={index}>
                          <Item.Content>
                            <Item.Header as="h2" href={companyWebsite}>
                              {companyWebsite ? (
                                <a href={companyWebsite}>{company}</a>
                              ) : (
                                <div>{company}</div>
                              )}
                            </Item.Header>
                            <Item.Meta>
                              {jobDescriptionLink ? (
                                <a href={jobDescriptionLink}>{jobTitle} </a>
                              ) : (
                                <div style={{ color: "rgba(0,0,0,.4)" }}>
                                  {jobTitle}
                                </div>
                              )}
                            </Item.Meta>
                            <Item.Meta>{date}</Item.Meta>

                            <Item.Description>
                              <List bulleted size="medium">
                                {description.map((des, i) => {
                                  return <List.Item key={i}>{des}</List.Item>;
                                })}
                              </List>
                            </Item.Description>
                            <Item.Extra>
                              {skills.map((skill, i) => {
                                if (skill.icon)
                                  return (
                                    <Label key={skill + "-" + i}>
                                      {skill.icon.includes("devicon") ? (
                                        <i
                                          class={skill.icon}
                                          style={{ paddingRight: 8 }}
                                        />
                                      ) : (
                                        <Icon name={skill.icon} />
                                      )}
                                      {skill.name}
                                    </Label>
                                  );
                              })}
                            </Item.Extra>
                          </Item.Content>
                          <List.Header />
                          {/* <Item.Description floated="right">
                              {date}
                            </Item.Description> */}
                        </Item>
                      );
                    }
                  }
                )}
              </Item.Group>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}
