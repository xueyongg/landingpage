import React, { Component } from 'react'
import {
    Modal, Header, Segment, Grid, Image, Container,
    Button, List, Icon, Input, Menu
} from 'semantic-ui-react';
import Link from 'next/link';
import { TopMenu } from './components/menu';
import { BottomMenu } from './components/bottom_menu';

export class Portfolio extends Component {
    static async getInitialProps({ pathname, query }) {
        return { query }
    }

    render() {
        return (
            <div>
                <TopMenu />

                <Segment>
                    <Header as="h3">
                        This is the portfolio page
                    </Header>
                    <Grid celled>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Image src='/assets/images/wireframe/image.png' />
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <Image src='/assets/images/wireframe/centered-paragraph.png' />
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Image src='/assets/images/wireframe/image.png' />
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Image src='/assets/images/wireframe/paragraph.png' />
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Image src='/assets/images/wireframe/image.png' />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <BottomMenu />
            </div>
        )
    }
}