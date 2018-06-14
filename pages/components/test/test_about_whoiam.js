import React, { Component } from "react";
import { Header, Grid, Container, Icon } from "semantic-ui-react";
const data = require("../../../static/assets/data.json");

export default class About_understand extends Component {
  render() {
    const understand = data.about.understand;
    return (
      <div>
        <Container style={{ padding: "8em 0em 2em 0em", margin: 0 }}>
          <Grid textAlign="center">
            <Header as="h2">
              <Icon name={understand.icon} />
              <Header.Content>{understand.header}</Header.Content>
            </Header>

            <Grid.Row>
              {/* <Grid.Column textAlign="justified"> */}
              {/* {understand.description.map((des, i) => {
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
              </Grid.Column> */}

              <Grid.Column textAlign="justified">
                <div class="content">
                  <h2>Lily</h2>
                  <div class="grid">
                    <figure class="effect-lily">
                      <img alt="img12" src="../../../static/images/about.jpg" />
                      <figcaption>
                        <div>
                          <h2>
                            Nice <span>Lily</span>
                          </h2>
                          <p>Lily likes to play with crayons and pencils</p>
                        </div>
                        <a href="#">View more</a>
                      </figcaption>
                    </figure>
                    <figure class="effect-lily">
                      <img alt="img1" src="../../../static/images/about.jpg" />
                      <figcaption>
                        <div>
                          <h2>
                            Nice <span>Lily</span>
                          </h2>
                          <p>Lily likes to play with crayons and pencils</p>
                        </div>
                        <a href="#">View more</a>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}
