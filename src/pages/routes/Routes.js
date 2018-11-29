
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SourceDefinition from './../source-definition/SourceDefinition';
import LayoutDefinition from './../layout-definition/LayoutDefinition';
import RecordTokenizer from './../record-tokenizer/RecordTokenizer';
import Login from './../login/LoginForm';
import SiderLayout from './../../layouts/layout2/SiderLayout';
import NavigationBar from './../../layouts/sidebar/index';
import Preview from './../preview/preview';
import { Layout, Menu, Icon, Input, Dropdown, Select } from 'antd';
import './siderlayout.css';
import 'antd/dist/antd.css';
import './header.css';
import Tables from './../table/table';
import TaskDesign from './../BpmnBoard/BpmnBoard';
import TLogo from './../../components/navbar-logo-single-T/logo'
import Image from './../../components/navbar-logo/image';
import MainBoard from './../main-board/mainBoard';
import ReconFlow from '../recon-flow/ReconFlow';
import welcome from './../welcome/welcome';
import Dashboard from './../dashboard/DashboardLand';
import flowtype from './../select-flow-type/selflowtype';

const Search = Input.Search;
const Option = Select.Option;
const { Header, Sider, Content } = Layout;
const menu1 = (
    <Menu>
        <Menu.Item key="0">
            <a>You are all caught up! </a>

        </Menu.Item>
    </Menu>
);
const menu2 = (
    <Menu>
        <Menu.Item key="0">
            <a>No new messages</a>
        </Menu.Item>
    </Menu>
);
const menu3 = (
    <Menu className="menu">
        <Menu.Item key="0">
            <Icon type="profile"/>
            <span><a style={{color:'#757E82'}}>Edit Profile</a></span>
        </Menu.Item>
        <Menu.Divider className="menu9" />
        <Menu.Item key="1">
            <Icon type="read"/>
            <span><a style={{color:'#757E82'}}>View Profile</a></span>
        </Menu.Item>
        <Menu.Divider className="menu9" />
        <Menu.Item key="2">
            <Icon type="logout" />
            <span><a style={{color:'#757E82'}}>Sign Out</a></span>
        </Menu.Item>

    </Menu>
);


export default class Routes extends Component {

    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
            projects: [],
            openProject : "Chase Payment",
            defaultval:'Chase Payment'
        };
        this.handleChange=this.handleChange.bind(this);
    }
         handleChange(value) {
            console.log(`selected ${value}`);
    
            const openArray = [];
            openArray.push(value);
    
            this.setState({ openProject: value });
        }

    componentDidMount() {
        
                fetch("http://10.11.14.79:8081/recon/product/getlist/")
                    .then(res => res.json())
                    .then(
                        (result) => {
                            console.log("Result::", result)
                            this.setState({
                                projects: result
                            });
                        },
        
                        (error) => {
                            console.log("Cannot fetch product list");
                            console.log(error);
                        }
                    )
            }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
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
                                path="/welcome"
                                component={welcome}
                            />
                             <Route
                                exact
                                path="/Dashboard"
                                component={Dashboard}
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
                                {logo ? (
                                    <div className='sidebar'><div><TLogo /></div><div><NavigationBar param = {this.state.openProject}/></div></div>
                                ) : (
                                        <div className='sidebar'><div><Image /></div><div><NavigationBar param = {this.state.openProject} /></div></div>)
                                }
                                                              
                                </Sider>

                                {/* <Sider
                                    trigger={null}
                                    collapsible
                                    collapsed={!this.state.collapsed} 
                                >
                                    <NavigationBar1 />
                                </Sider> */}
                                <Layout>
                                    <Header style={{ background: '#EE008C', padding: 7, paddingLeft: 18 }} >
                                        <Icon style={{ fontSize: '26px',color:'#FEF5F9'}}
                                            className="trigger"
                                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                            onClick={this.toggle}
                                        />

                                        <Select placeholder="Select project" className="select" defaultValue={ this.state.defaultval } onChange={this.handleChange}>
                                        {
                                            this.state.projects.map(project =>
                                               
                                                <Option  value={project.productName} >{project.productName}</Option>
                                               
                                            )
                                            
                                        }
                                    </Select>

                                        <div className="iconlist" >
                                            <Dropdown overlay={menu1} trigger={['click']}>
                                                <a className="iconbell" href="#">
                                                    <Icon type="bell" style={{ fontSize: '22px', color: '#FFFFFF' }} />
                                                </a>
                                            </Dropdown>


                                            <Dropdown overlay={menu2} trigger={['click']}>
                                                <a className="iconbell" href="#">
                                                    <Icon type="message" className="iconmsg" style={{ fontSize: '22px', color: '#FFFFFF' }} />

                                                </a>
                                            </Dropdown>
                                            <Dropdown overlay={menu3} trigger={['click']} onClick={this.showModal}>
                                                <a className="iconbell" href="#">
                                                    <Icon type="user" className="iconuser" style={{ fontSize: '22px', color: '#FFFFFF' }} />
                                                </a>

                                            </Dropdown>
                                           

                                        </div>
                                    </Header>
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
                                        <Route
                                            exact
                                            path="/ReconFlow"
                                            component={ReconFlow}
                                        />
                                          <Route
                                            exact
                                            path="/flowtype"
                                            component={flowtype}
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