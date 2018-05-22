import React, { Component } from 'react'
import {
    Modal, Header, Segment, Grid, Image, Container,
    Button, List, Icon, Input, Menu
} from 'semantic-ui-react';
import Link from 'next/link';
import { TopMenu } from './components/menu';
import { BottomMenu } from './components/bottom_menu';

export default class Privacy extends Component {
    static async getInitialProps({ pathname, query }) {
        return { query }
    }

    render() {
        return (
            <div>
                <TopMenu />

                <Segment>
                    <Header as="h3">
                        Privacy Policy
                    </Header>
                    <Container text>
                        <p>Text text text</p>
                    </Container>
                </Segment>
                <BottomMenu />
            </div>
        )
    }
}