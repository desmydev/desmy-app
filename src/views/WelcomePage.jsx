import React from "react";
import withRouter from "../apis/WithRouter";

class WelcomePage extends React.Component{

  constructor(props){
      super(props);
      this.state={

      }
  }

  render(){
    return (
      <>
        <div className="flex h-screen w-screen text-white font-poppinsRegular items-center justify-center bg-blue-500">
              <div className="container grid-col-1 lg:grid grid-cols-3">
                <div className=" mx-5 lg:col-span-2">
                    <div className="flex flex-col w-full ">
                      <div className=" font-poppinsRegular mb-5 text-4xl">Desmy React Framework</div>
                      <div className=" font-poppinsSemiBold white text-2xl lg:text-5xl"> We know how hard it is to be a developer. It doesn’t have to be</div>
                      <div className="flex flex-col lg:flex-row lg:space-x-4 mt-10">
                        <a href="https://www.npmjs.com/package/desmy-react" target="_blank" className="mt-5 bg-black text-white px-10 py-4 rounded-lg cursor-pointer hover:bg-green-500 text-center">Try Free UI Components</a>
                        <a href="mailto:desmydev@gmail.com" target="_blank" className="mt-5 bg-white text-black px-10 py-4 rounded-lg cursor-pointer hover:bg-blue-200  hover:text-black text-center">Need Help? Reach Here</a>
                      </div>
                    </div>
                </div>
                <div></div>
              </div>
        </div>
      </>
    )
  }
}

export default withRouter(WelcomePage);
