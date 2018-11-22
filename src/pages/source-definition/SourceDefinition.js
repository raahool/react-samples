import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Button, Steps, Breadcrumb,Card, Icon, Row, Col,Upload , message, Popover } from 'antd';
import LayoutDefinition from './../layout-definition/LayoutDefinition';
import Tables from './../table/table';
// import SourceCards from './sourcecards';
import CardTable from './cardtable';
// import SourceButton from './SourceButton';
//import DatasetCard from './DatasetCard';
import './uploadbutton.css'
import './SourceDefinition.css'

const Step = Steps.Step;

var hoverContent = require('./../infomapper.js').default;


const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};


export default class SourceDefinition extends Component {
    state = {
        percent: 0,
        clicked: false,
        hovered: false,
      }


      constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
    

      handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
      }

      showProgress = () => {
        let percent = this.state.percent + 10;
        if (percent > 100) {
          percent = 100;
        }
        this.setState({ percent });
      }

 
      //-----------------

      // state = {
      //   visible: false,
      // }
    
      // hide = () => {
      //   this.setState({
      //     visible: false,
      //   });
      // }

      //--------------------

    render() {

     
        return (
            <div>
              {/*   <Breadcrumb className="breadcumb">
                <Breadcrumb.Item>
                <Steps size="small" current={0} progressDot>
                <Step title="Source Definition" />
                <Step title="Layout Definition" />
                <Step title="Record Tokenizer" />
                <Step title="Task Design" />
            </Steps>
              </Breadcrumb.Item>
            </Breadcrumb> */}

                <h2>Source Definition</h2>
               
                <Row>
                    <Col span={10}>
                    <label className="title-upload">Choose your file :</label>
                    
                    </Col>
                    <Col span={10}>
                   
                       
                      
                            <div>
                            <Upload {...props}
                             >  
                                <Button className="upload-button" >
                               {/* {this.state.isToggleOn ? (
                                 'ON'
                                 ) : (<Upload {...props} />) }  */}

                                 <Icon type="plus-circle" theme="twoTone" /> &nbsp;&nbsp;&nbsp; Add Dataset
                                 
                                </Button>  
                                <Popover placement = "right" title="Datasets"
                               content={hoverContent.maparray.RecordExtract}                               
                                // <DatasetCard/>
                      
                                                            >
                                <Icon className="info-icon" type="question-circle" />
                                </Popover>
                                </Upload><br/>
                                <Link to="Tables">
                                <Button className="upload-button">Auto Configuration</Button>
                                <Popover placement = "right" title="Datasets"
                               content={hoverContent.maparray.RecordExtract}  > 
                               <Icon className="info-icon" type="question-circle" />                            
                               
                                </Popover>
                                </Link>
                                </div>
                                
                     
                     
                    </Col>
                 </Row>
               <br/>
               <br/>

               <div><CardTable/></div>

                <br /><br />
                   
                  <Link to="/Login">
                    <Button className="next-btn">Back</Button>
                  </Link>
                    <Link to="/LayoutDefinition">
                        <Button type='primary' >Next</Button>
                    </Link>
              
            </div>

        )
    }
}
