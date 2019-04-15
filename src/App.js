import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './component/headerComponent';
import DataEnterComponent from './component/dataEnterComponent';
import MemberDetailsInfo from './component/memberDetailsComponent';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      memberInfo: [],
      TotalAmountDisplay:0,
      lengthInfo: '',
    }
    this.addMemberInfo = this.addMemberInfo.bind(this);
  }

  addMemberInfo = (memInfo) => {
    let {memberInfo} = this.state;
     let memberDetails = this.state.memberInfo;
     memberDetails.push(memInfo);
     this.setState({ memberInfo : memberDetails,
      lengthInfo:memInfo.id});
      console.log('changes adat')
  }

  render() {
    console.log('render');
    return (
      <div className="App">
        <HeaderComponent/>
        <DataEnterComponent memberDetails={this.addMemberInfo} memberInformation={this.state.memberInfo}/>
        <MemberDetailsInfo memberInfo={this.state.memberInfo}/>
      </div>
    );
  }
}

export default App;
