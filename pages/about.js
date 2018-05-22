import React, { Component } from 'react'
import {
    Modal, Header, Segment, Grid, Image,
    Button, List, Icon, Input, Menu, Container
} from 'semantic-ui-react';
import Link from 'next/link';
import { TopMenu } from './components/menu';
import { BottomMenu } from './components/bottom_menu';

export default class About extends Component {
    static async getInitialProps({ pathname, query }) {
        return { query }
    }

    render() {
        return (
            <div>
                <TopMenu />
                <div>
                    <Header as="h4" textAlign="center">
                        Discover more about me and my personhood
                    </Header>
                    <Header as="h1" textAlign="center">
                        About me
                    </Header>
                    <Image src='/static/images/max-van-den-oetelaar-601242-unsplash.jpg' fluid rounded={true} bordered />
                </div>

                <div style={{ marginTop: 0, marginLeft: 0, marginRight: 0, marginBottom: 100, border: 1, backgroundColor: "grey" }}>
                    <Container>
                        {/* Fun fact about myself*/}

                        <Header as="h2" textAlign="center">
                            <Icon name='student' circular />
                            <Header.Content>Funfacts about myself</Header.Content>
                        </Header>
                        <Image src='https://react.semantic-ui.com/assets/images/wireframe/paragraph.png' />
                    </Container>
                </div>

                <div style={{ marginTop: 150, marginLeft: 10, marginRight: 10, marginBottom: 100, border: 1 }}>
                    <Container style={{ marginTop: 150, marginLeft: 10, marginRight: 10, marginBottom: 80, border: 1 }}>
                        {/* Some photos of Canada and nature */}

                        <Grid>
                            <p>This will show a total of 6 photos with no borders padding or margin</p>
                            <Grid.Row columns={6}>
                                <Grid.Column>
                                    <Image src='https://react.semantic-ui.com/assets/images/wireframe/image.png' />
                                </Grid.Column>
                                <Grid.Column>
                                    <Image src='https://react.semantic-ui.com/assets/images/wireframe/image.png' />
                                </Grid.Column>
                                <Grid.Column>
                                    <Image src='https://react.semantic-ui.com/assets/images/wireframe/image.png' />
                                </Grid.Column>
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
                        </Grid>
                    </Container>
                </div>
                <div style={{ marginTop: 150, marginLeft: 10, marginRight: 10, marginBottom: 100, border: 1 }}>
                    <Container>
                        {/* Understand who I am as a person */}
                        <Header as="h2" textAlign="center">
                            <Icon name='student' circular />
                            <Header.Content>Understand who I am as a person</Header.Content>
                        </Header>
                        <Image src='https://react.semantic-ui.com/assets/images/wireframe/paragraph.png' />
                    </Container>
                </div>
                <div style={{ marginTop: 150, marginLeft: 10, marginRight: 10, marginBottom: 100, border: 1 }}>
                    <Container>

                        {/* Instagram Feed */}
                        <Header as="h2" textAlign="center">
                            <Icon name='student' circular />
                            <Header.Content>Instagram Feed</Header.Content>
                        </Header>
                        <Image src='https://react.semantic-ui.com/assets/images/wireframe/paragraph.png' />

                    </Container>
                </div>
                <div style={{ marginTop: 150, marginLeft: 10, marginRight: 10, marginBottom: 100, border: 1 }}>
                    <Container>

                        {/* What I've done and what I can do */}
                        <Header as="h2" textAlign="left">
                            <Icon name='student' circular />
                            <Header.Content>What I've done and what I can do</Header.Content>
                        </Header>
                        <p>Link to resume</p>
                    </Container>
                </div>

                <BottomMenu />
            </div>
        )
    }
}