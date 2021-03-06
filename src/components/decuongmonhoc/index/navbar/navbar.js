import React, { Component } from 'react';
import { Menu, Icon, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import "./navbar_css.css";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class NavBar extends Component {
    state = {
        current: '',
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <React.Fragment>
                <div className="navbar-left">
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                    >
                        <Menu.Item key="mail">
                            <Icon type="mail" />Navigation One
                        </Menu.Item>
                        <Menu.Item key="app" disabled>
                            <Icon type="appstore" />Navigation Two
                        </Menu.Item>
                    </Menu>
                </div>
                <div className="navbar-right">
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                    >
                        {/* <Menu.Item key="mail">
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        </Menu.Item> */}
                        <SubMenu title={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}>
                            <MenuItemGroup title="Item 1">
                                <Menu.Item key="setting:1">Option 1</Menu.Item>
                                <Menu.Item key="setting:2">Option 2</Menu.Item>
                            </MenuItemGroup>
                            <MenuItemGroup title="Item 2">
                                <Menu.Item key="setting:3">Option 3</Menu.Item>
                                <Menu.Item key="setting:4">Option 4</Menu.Item>
                            </MenuItemGroup>
                        </SubMenu>
                    </Menu>
                </div>
            </React.Fragment>
        );
    }
}
export default NavBar;