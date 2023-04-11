import React, { Component } from 'react'

export class ClassComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }

      
    }
    updateCount(){
        console.log("updateCount!!")
        this.setState((prevState)=>({count:prevState.count+5}))
    }


  render() {
    const {name} = this.props
    const {count} = this.state
    return (
      <div>
        <h3>This is recat app developed by {name}</h3>
        <h4>The count of {name} sir student is <strong>{count}</strong></h4>
        <button onMouseOver={()=>this.updateCount()}>update the count of student</button>
      </div>
    )
  }
}

export default ClassComp