import React, { Component } from "react";
import { Header, Grid, Image, Container, Icon } from "semantic-ui-react";
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
            <Grid.Row>
              <Grid.Column width={5}>
                <Image
                  src={"/static/images/about/" + funfact.image}
                  alt={"/static/images/about/" + funfact.image}
                  rounded
                  style={{ width: "100%", borderWidth: "thin" }}
                  bordered
                />
              </Grid.Column>
              <Grid.Column width={11} textAlign="justified">
                {funfact.description.map((des, i) => {
                  return (
                    <h4
                      key={i}
                      style={{
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
