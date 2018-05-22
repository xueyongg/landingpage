import React, { Component } from 'react'
import {
    Modal, Header, Segment, Grid, Image,
    Button, List, Icon, Input, Menu, Container
} from 'semantic-ui-react';
import Link from 'next/link';
import { TopMenu } from './components/menu';
import { BottomMenu } from './components/bottom_menu';

export default class Portfolio extends Component {
    static async getInitialProps({ pathname, query }) {
        return { query }
    }

    render() {
        return (
            <div>
                <TopMenu />

                <Header as="h4" textAlign="center">
                    Let's have a little chat
                    </Header>
                <Header as="h1" textAlign="center">
                    Contact me
                    </Header>
                <Image src='/static/images/lili-kovac-444033-unsplash.jpg' fluid rounded={true} bordered />

                <div style={{ marginTop: 50, marginLeft: 0, marginRight: 0, marginBottom: 100, border: 1 }}>
                    <Container>
                        {/* A form to submit*/}

                        <Header as="h2" textAlign="center">
                            <Icon name='student' circular />
                            <Header.Content>Funfacts about myself</Header.Content>
                        </Header>
                        <p>Add in a form</p>
                    </Container>
                </div>
                <BottomMenu />
            </div>
        )
    }
}