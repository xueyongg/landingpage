import React, { Component } from 'react'
import { Modal, Header, Button, List, Icon, Input, Menu, Segment, Container, Image } from 'semantic-ui-react';
import Link from 'next/link';
import { TopMenu } from './components/menu';
import { Home_projects } from './components/home_projects';
import { BottomMenu } from './components/bottom_menu';
import { Todo } from './todo';
const moment = require('moment');

export class Home extends Component {
    static async getInitialProps({ query }) {
        // console.log(query);
        return true;
    }
    state = {}

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Header as="h1" textAlign="center">Welcome Home</Header>
                <Image src='/static/images/homeImage.jpg' fluid rounded={true} bordered />
                <div class="centered">Centered</div>
                <div style={{ height: 400, backgroundColor: "white" }}>
                    {/* Simple Summary of me and what i am passionate about */}
                    <Segment vertical>
                        <Todo />
                    </Segment>
                </div>
                <div style={{ height: 450, backgroundColor: "grey" }}>
                    {/* Projects */}
                    <Segment vertical>
                        <Header as="h2" textAlign="center" style={{ marginTop: 50 }}>My latest projects</Header>
                        <Home_projects />
                    </Segment>
                </div>
                <div style={{ height: 400, backgroundColor: "#e3dbd7" }}>
                    {/* About */}
                    <Segment vertical>
                        <Header as="h2" textAlign="center" style={{ marginTop: 50 }}>My life as a developer</Header>
                        <Button><Link href="/about" passHref><a>Learn more about me</a></Link></Button>
                    </Segment>
                </div>
                {/* Include in an arrow from garysheng.com as reference */}
                <BottomMenu />
            </div>
        )
    }
}