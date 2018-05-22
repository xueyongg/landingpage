import React, { Component } from 'react'
import { Modal, Header, Button, List, Icon, Input, Menu, Segment, Container, Grid, Image } from 'semantic-ui-react';
import Link from 'next/link';
const moment = require('moment');

export class Projects extends Component {
    static async getInitialProps({ query }) {
        // console.log(query);
        return true;
    }
    state = {}

    render() {
        const { activeItem } = this.state

        return (
            <div>

                <Container style={{ marginTop: 0, marginLeft: 10, marginRight: 10, border: 1 }}>
                    <Grid>
                        <Grid.Row columns={3}>
                            <Grid.Column>
                                <Image src='https://react.semantic-ui.com/assets/images/wireframe/image.png' />
                            </Grid.Column>
                            <Grid.Column>
                                <Image src='https://react.semantic-ui.com/assets/images/wireframe/image.png' />
                            </Grid.Column>
                            <Grid.Column>
                                <Image src='https://react.semantic-ui.com/assets/images/wireframe/image.png' />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={3}>
                            <Grid.Column />
                            <Grid.Column >
                                <Button >View more projects</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        )
    }
}