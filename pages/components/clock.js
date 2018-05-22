const moment = require('moment');
import { Modal, Header, Button, List, Icon, Input, Menu, Segment } from 'semantic-ui-react';

export const Clock = ({ }) => {
    return (
        <Menu.Menu position='right'>
            <Menu.Item name='new-tab' onClick={() => { setInterval(() => { return "" }, 1000) }}>
                <Icon name='time' />
                {moment().format('dddd, MMMM Do, YYYY h:mm:ss A')}
            </Menu.Item>
        </Menu.Menu>

    )
}