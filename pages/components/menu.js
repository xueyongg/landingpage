import React, { Component } from 'react'
import { Modal, Header, Button, List, Icon, Input, Menu, Segment } from 'semantic-ui-react';
import Link from 'next/link';
import { Clock } from './clock';
// import '../static/semantic/out/semantic.min.css';

export class TopMenu extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    static async getInitialprops({ }) {
        return activeLink;
    }
    render() {
        const { activeItem } = this.state
        let menuStyle = {
            marginTop: 0,
            marginRight: 10,
            marginBottom: 0,
            marginLeft: 10,
            paddingTop: 6.18,
            paddingRight: 0,
            paddingBottom: 6.18,
            paddingLeft: 0
        }

        return (
            <div>
                <Menu secondary>
                    <Menu.Menu position='right' style={menuStyle}>
                        <Link href={{ pathname: "/" }} passHref>
                            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} >
                                <p>Home</p>
                            </Menu.Item>
                        </Link>
                        <Link href={{ pathname: "/portfolio", query: { name: "" } }} passHref>
                            <Menu.Item name='portfolio' active={activeItem === 'portfolio'} onClick={this.handleItemClick} >
                                <p>Portfolio</p>
                            </Menu.Item>
                        </Link>
                        <Link href={{ pathname: "/about" }} passHref>
                            <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick} >
                                <p>About</p>
                            </Menu.Item>
                        </Link>
                        <Link href={{ pathname: "/resume" }} passHref>
                            <Menu.Item name='resume' active={activeItem === 'resume'} onClick={this.handleItemClick} >
                                <p>Resume</p>
                            </Menu.Item>
                        </Link>
                        <Link href={{ pathname: "/contact" }} passHref>
                            <Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick} >
                                <p>Contact</p>
                            </Menu.Item>
                        </Link>
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}