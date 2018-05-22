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

export class About_photos extends Component {
  static async getInitialProps({ pathname, query }) {
    return { query };
  }

  render() {
    return (
      <div>
        <p>
          This will show a total of 6 photos with no borders padding or margin
        </p>
        <Grid>
          <Grid.Row columns={3} style={{padding: 0}}>
            <Grid.Column style={{ padding: 0 }}>
              <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
            </Grid.Column>
            <Grid.Column style={{ padding: 0 }}>
              <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
            </Grid.Column>
            <Grid.Column style={{ padding: 0 }}>
              <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3} style={{padding: 0}}>
            <Grid.Column style={{padding: 0}}>
              <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
            </Grid.Column>
            <Grid.Column style={{ padding: 0 }}>
              <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
            </Grid.Column>
            <Grid.Column style={{ padding: 0 }}>
              <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
