import React, { Component } from 'react'
import { Modal, Header, Button, List, Icon, Input, Menu, Segment, Container } from 'semantic-ui-react';
import Link from 'next/link';
const moment = require('moment');

export class Todo extends Component {
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
                    <Header as="h1" textAlign="center">To do List</Header>
                    <List divided relaxed>
                        <List.Item>
                            <List.Icon name='github' size='large' verticalAlign='middle' />
                            <List.Content>
                                <List.Header as='a'>First Draft</List.Header>
                                <List.Description as='a'>Updated 10 mins ago</List.Description>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='github' size='large' verticalAlign='middle' />
                            <List.Content>
                                <List.Header as='a'>Set up the wireframe</List.Header>
                                <List.Description as='a'>Updated 10 mins ago</List.Description>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='github' size='large' verticalAlign='middle' />
                            <List.Content>
                                <List.Header as='a'>Understand how to theme the website</List.Header>
                                <List.Description as='a'>Updated 10 mins ago</List.Description>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='github' size='large' verticalAlign='middle' />
                            <List.Content>
                                <List.Header as='a'>Insert logic into website component rendering</List.Header>
                                <List.Description as='a'>Updated 10 mins ago</List.Description>
                            </List.Content>
                        </List.Item>
                    </List>
                </Container>
            </div>
        )
    }
}