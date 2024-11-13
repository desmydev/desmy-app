import React from "react";
import withRouter from "../apis/WithRouter";
import WelcomePage from "./WelcomePage";

class App extends React.Component{

  constructor(props){
      super(props);
      this.state={

      }
  }

  render(){
    return (
      <>
        {/* 
          remove this when start coding
        */}
        <WelcomePage />
      </>
    )
  }
}

export default withRouter(App)