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
  Menu,
  Responsive
} from "semantic-ui-react";
import Link from "next/link";

export class About_photos extends Component {
  render() {
    return (
      <div>
        <Responsive
          minWidth={
            Responsive.onlyTablet.minWidth
              ? Responsive.onlyTablet.minWidth
              : 500
          }
          maxWidth={
            Responsive.onlyWidescreen.maxWidth
              ? Responsive.onlyWidescreen.maxWidth
              : 1500
          }
        >
          <p>
            This will show a total of 6 photos with no borders padding or margin
          </p>
          <Grid>
            <Grid.Row columns={3} style={{ padding: 0 }}>
              <Grid.Column style={{ padding: 0 }}>
                <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
              </Grid.Column>
              <Grid.Column style={{ padding: 0 }} size="medium">
                <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
              </Grid.Column>
              <Grid.Column style={{ padding: 0 }} size="medium">
                <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3} style={{ padding: 0 }}>
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
          </Grid>
        </Responsive>
        <Responsive minWidth={150} maxWidth={Responsive.onlyMobile.maxWidth}>
          <p>
            This will show a total of 6 photos with no borders padding or margin
          </p>
          <Grid>
            <Grid.Row columns={2} style={{ padding: 0 }}>
              <Grid.Column style={{ padding: 0 }}>
                <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
              </Grid.Column>
              <Grid.Column style={{ padding: 0 }}>
                <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2} style={{ padding: 0 }}>
              <Grid.Column style={{ padding: 0 }}>
                <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
              </Grid.Column>
              <Grid.Column style={{ padding: 0 }}>
                <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2} style={{ padding: 0 }}>
              <Grid.Column style={{ padding: 0 }}>
                <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
              </Grid.Column>
              <Grid.Column style={{ padding: 0 }}>
                <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
      </div>
    );
  }
}
