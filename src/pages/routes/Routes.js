import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SourceDefinition from './../source-definition/SourceDefinition';
import LayoutDefinition from './../layout-definition/LayoutDefinition';
import RecordTokenizer from './../record-tokenizer/RecordTokenizer';
import Login from './../login/LoginForm';
import SiderLayout from './../../layouts/layout2/SiderLayout';
import NavigationBar from './../../layouts/sidebar/index';
import Preview from './../preview/preview';
import { Layout, Menu, Icon, Input, Dropdown } from 'antd';
import './siderlayout.css';
import 'antd/dist/antd.css';
import './header.css';
import Tables from './../table/table';
import TaskDesign from './../taskDesign/taskDesign';
import TLogo from './../../components/navbar-logo-single-T/logo'
import Image from './../../components/navbar-logo/image';
import MainBoard from './../main-board/mainBoard';

import CustomHeader from '../../pages/header/index'


const Search = Input.Search;
const { Header, Sider, Content } = Layout;

export default class Routes extends Component {

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
 
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        }

        this.showDrawar = this.showDrawar.bind(this);
    }

    showDrawar(){

        this.props.click();

    }

    render() {
        
        const logo=this.state.collapsed;

        return (
            <div>
                <Router>
                    <div >
                        <Switch>
                            <Route
                                exact
                                path="/"
                                component={Login}
                            />

                            <Route
                                exact
                                path="/MainBoard"
                                component={MainBoard}
                            />

                            <Layout>
                                <Sider
                                    trigger={null}
                                    collapsible
                                    collapsed={this.state.collapsed}
                                  
                                >
                               
                            {logo?(
                                   <div className='sidebar'><div><TLogo/></div><div><NavigationBar /></div></div>
                                   ):( 
                                    <div className='sidebar'><div><Image/></div><div><NavigationBar /></div></div>)
                                     }
                                                              
                                </Sider>

                                <Layout>

                                <CustomHeader showBurgerMenu = {true} showIcon = {false} collapsedClick = {this.toggle}  showDrawar = {this.showDrawar}/>

                                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                                        <Route
                                            exact
                                            path="/SourceDefinition"
                                            component={SourceDefinition}
                                        />
                                        <Route
                                            exact
                                            path="/LayoutDefinition"
                                            component={LayoutDefinition}
                                        />
                                        <Route
                                            exact
                                            path="/RecordTokenizer"
                                            component={RecordTokenizer}
                                        />
                                        <Route
                                            exact
                                            path="/Preview"
                                            component={Preview}
                                        />
                                        <Route
                                            exact
                                            path="/Tables"
                                            component={Tables}
                                        />
                                        <Route
                                            exact
                                            path="/TaskDesign"
                                            component={TaskDesign}
                                        />

                                    </Content>
                                </Layout>
                            </Layout>

                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}