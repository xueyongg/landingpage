import _ from 'lodash'
import React, { Component } from 'react'
import {
    Modal, Header, Segment, Grid, Image, Container, Message,
    Button, List, Icon, Input, Menu, Dropdown, Divider, Visibility, Form
} from 'semantic-ui-react';
import { TopMenu } from './components/menu';
import { BottomMenu } from './components/bottom_menu';

export default class Contact extends Component {
    state = {
        menuFixed: false,
        overlayFixed: false,
    }

    handleOverlayRef = (c) => {
        const { overlayRect } = this.state

        if (!overlayRect) this.setState({ overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width') })
    }

    stickOverlay = () => this.setState({ overlayFixed: true })

    stickTopMenu = () => {
        this.setState({ menuFixed: true })
        console.log("stickTopMenu");
    }

    unStickOverlay = () => this.setState({ overlayFixed: false })

    unStickTopMenu = () => {
        this.setState({ menuFixed: false })
        console.log("unStickTopMenu");
    }

    render() {
        const { menuFixed, overlayFixed, overlayRect } = this.state

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

                <Container text>
                    <div className='login-form'>
                        <Grid
                            textAlign='center'
                            style={{ height: '100%' }}
                            verticalAlign='middle'
                        >
                            <Grid.Column style={{ maxWidth: 450 }}>
                                <Header as='h2' color='teal' textAlign='center'>
                                    <Image src='/logo.png' />
                                    {' '}Log-in to your account
                                </Header>
                                <Form size='large'>
                                    <Segment stacked>
                                        <Form.Input
                                            fluid
                                            icon='user'
                                            iconPosition='left'
                                            placeholder='E-mail address'
                                        />
                                        <Form.Input
                                            fluid
                                            icon='lock'
                                            iconPosition='left'
                                            placeholder='Password'
                                            type='password'
                                        />

                                        <Button color='teal' fluid size='large'>Login</Button>
                                    </Segment>
                                </Form>
                                <Message>
                                    New to us? <a href='#'>Sign Up</a>
                                </Message>
                            </Grid.Column>
                        </Grid>
                    </div>

                </Container>
                <BottomMenu />
            </div>
        )
    }
}