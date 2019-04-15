import React, { Component } from 'react'


class  MemberDetailsInfo extends Component {
  
 
  getTotalInformation= ()=>{
    const {memberInfo} = this.props;
    let totalInfo = this.initializeValue();
    if(memberInfo.length>0){
      memberInfo.map((memb) => {
        totalInfo.twoThousandNo += Number(memb.twoThousandNo);
        totalInfo.fiveHundreadNo+= Number(memb.fiveHundreadNo);
        totalInfo.twoHundreadNo+= Number(memb.twoHundreadNo);
        totalInfo.oneHundreadNo+= Number(memb.oneHundreadNo);
        totalInfo.fiftyRupeesNo+= Number(memb.fiftyRupeesNo);
        totalInfo.totalAmount+= Number(memb.totalAmount);
      });
    }
    return totalInfo;

  }
    
  initializeValue(){
    return {twoThousandNo:0,
      fiveHundreadNo:0,
      twoHundreadNo:0,
      oneHundreadNo:0,
      fiftyRupeesNo:0,
      totalAmount:0
    }
  }


    render() { 
        const {memberInfo} = this.props;
        const checkTotal = this.getTotalInformation();
        return ( <React.Fragment>
        {memberInfo.length > 0  ? 
        <div>
          <table>
            <thead>
             <tr>
              <th>Name</th>
              <th>2000</th>
              <th>500</th>
              <th>200</th>
              <th>100</th>
              <th>50</th>
              <th>Total</th>
              </tr>
            </thead>
            <tbody>
            {memberInfo.map((memb) =>
            <tr>
              <td>{memb.name}</td>
              <td>{memb.twoThousandNo}</td>
              <td>{memb.fiveHundreadNo}</td>
              <td>{memb.twoHundreadNo}</td>
              <td>{memb.oneHundreadNo}</td>
              <td>{memb.fiftyRupeesNo}</td>
              <td>{memb.totalAmount}</td>
            </tr>
          )}
            <tr>
             <td><b>Total</b></td>
             <td><b>{checkTotal.twoThousandNo}</b></td>
              <td><b>{checkTotal.fiveHundreadNo}</b></td>
              <td><b>{checkTotal.twoHundreadNo}</b></td>
              <td><b>{checkTotal.oneHundreadNo}</b></td>
              <td><b>{checkTotal.fiftyRupeesNo}</b></td>
              <td><b>{checkTotal.totalAmount}</b></td>
            </tr>
          </tbody>
          
        </table>
        
        
        </div>:
        <div>
            <h1> </h1>
        </div>
    
    }
        </React.Fragment>  );
    }
}
 
export default MemberDetailsInfo;