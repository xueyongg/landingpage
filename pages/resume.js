import React, { Component } from 'react'
import {
    Modal, Header, Segment, Grid, Image,
    Button, List, Icon, Input, Menu, Container
} from 'semantic-ui-react';
import Link from 'next/link';
import { TopMenu } from './components/menu';
import { BottomMenu } from './components/bottom_menu';

export default class Resume extends Component {
    static async getInitialProps({ pathname, query }) {
        return { query }
    }

    render() {
        return (
            <div>
                <TopMenu />
                <div>
                    <Header as="h1" textAlign="center">
                        Welcome Home

                    </Header>
                    <Image src='/static/images/max-van-den-oetelaar-601242-unsplash.jpg' fluid rounded={true} bordered />
                </div>
                <Container style={{ marginTop: 150, marginLeft: 10, marginRight: 10, marginBottom: 100, border: 1 }}>
                    {/* Techonology  |  Core |  Experienced*/}
                    <Grid>
                        <Grid.Row columns={3}>
                            <Grid.Column>
                                <Header as="h2">Teachnologies</Header>
                            </Grid.Column>
                            <Grid.Column>
                                <Header as="h3">Core Technology</Header>
                                <List bulleted>
                                    <List.Item>Gaining Access</List.Item>
                                    <List.Item>Inviting Friends</List.Item>
                                    <List.Item>Benefits
                                    </List.Item>
                                    <List.Item>Warranty</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column>
                                <Header as="h3">Experienced with</Header>
                                <List bulleted>
                                    <List.Item>Gaining Access</List.Item>
                                    <List.Item>Inviting Friends</List.Item>
                                    <List.Item>
                                        Benefits
                                    </List.Item>
                                    <List.Item>Warranty</List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>

                <Container style={{ marginTop: 150, marginLeft: 10, marginRight: 10, marginBottom: 80, border: 1 }}>
                    {/* Work Experience  |  Description */}

                    <Grid>
                        <Grid.Column width={6}>
                            <Header as="h2" textAlign="left">

                                <Icon name='users' circular />
                                <Header.Content>Work Experience</Header.Content>
                            </Header>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Image src='https://react.semantic-ui.com/assets/images/wireframe/paragraph.png' />
                        </Grid.Column>

                    </Grid>
                </Container>
                <Container style={{ marginTop: 150, marginLeft: 10, marginRight: 10, marginBottom: 100, border: 1 }}>
                    {/* Education  |  Description */}
                    <Grid>
                        <Grid.Column width={6}>
                            <Header as="h2" textAlign="left">
                                <Icon name='student' circular />
                                <Header.Content>Education</Header.Content>
                            </Header>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Image src='https://react.semantic-ui.com/assets/images/wireframe/paragraph.png' />
                        </Grid.Column>

                    </Grid>
                </Container>
                <BottomMenu />
            </div>
        )
    }
}