import React, { PureComponent } from 'react'

class DataEnterComponent extends PureComponent {

    constructor(props){
       super(props);
       this.state = {
        userName : '',
        twoThousand :0,
        fiveHundread:0,
        twoHundread:0,
        oneHundread:0,
        fiftyRupees:0,
        totalInfo:0,
        count:0
     };
    }

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value }, () => {
            this.calculateTotal()
           });
        
    }

    initiateStateInfo(){
        this.setState ( {
            userName : '',
            twoThousand :0,
            fiveHundread:0,
            twoHundread:0,
            oneHundread:0,
            fiftyRupees:0,
            totalInfo:0,
            count:this.state.count+1
         });
    }

    calculateTotal(){
     const {twoThousand,fiveHundread,twoHundread,fiftyRupees,oneHundread} = this.state;
     const Total =((twoThousand * 2000)+(fiveHundread*500)+(twoHundread*200)+(oneHundread*100)+(fiftyRupees*50));
     this.setState({totalInfo:Total});
    }

    calculateMoney(){
      const {userName,twoThousand,fiveHundread,twoHundread,fiftyRupees,oneHundread,totalInfo} = this.state;
      const addUserInfo = {name:userName,
                           twoThousandNo:twoThousand,
                           fiveHundreadNo:fiveHundread,
                           twoHundreadNo:twoHundread,
                           fiftyRupeesNo:fiftyRupees,
                           oneHundreadNo:oneHundread,
                           totalAmount: totalInfo,
                           id: this.state.count
                          };
    this.initiateStateInfo();
    this.props.memberDetails(addUserInfo);
    }

    render() { 
        return (  
            <React.Fragment>
                <div className="calculate-outer"> 
                  <div className="flex-element">
                   <div className="calculate-field">           
                     <label htmlFor="uname"><b>User</b></label>
                     <input type="text" placeholder="Enter Username" name="userName"  onChange={(e)=> this.handleChange(e) } value={this.state.userName} required/>
                   </div>
                   <div className="calculate-field"> 
                     <label htmlFor="twoth"><b>2000</b></label>
                     <input type="number" min="0" name="twoThousand" onChange={(e)=> this.handleChange(e)} value={this.state.twoThousand}  required/>
                   </div>
                   <div className="calculate-field">
                     <label htmlFor="fivehe"><b>500</b></label>
                     <input type="number" min="0" name="fiveHundread" onChange={(e)=> this.handleChange(e)} value={this.state.fiveHundread}  required/>
                   </div>
                   <div className="calculate-field">
                     <label htmlFor="twohe"><b>200</b></label>
                     <input type="number" min="0" name="twoHundread" onChange={(e)=> this.handleChange(e)} value={this.state.twoHundread}  required/>
                   </div>
                   <div className="calculate-field">  
                     <label htmlFor="onehe"><b>100</b></label>
                     <input type="number" min="0" name="oneHundread" onChange={(e)=> this.handleChange(e)} value={this.state.oneHundread}  required/>
                   </div>
                   <div className="calculate-field">
                     <label htmlFor="fiftyRu"><b>50</b></label>
                     <input type="number" min="0" name="fiftyRupees" onChange={(e)=> this.handleChange(e)} value={this.state.fiftyRupees}  required/>
                   </div>
                 
                                                              
                 </div>
                 
                 <div className="calculate-totalInfo">
                   <h2>Total : {this.state.totalInfo}</h2>
                 </div>  
                 <button  type="button" onClick={()=> this.calculateMoney()} >Add</button>
                </div>
               
            </React.Fragment>
        );
    }
}
 
export default DataEnterComponent;