import React from "react";

class App extends React.Component{

  constructor(props){
      super(props);
      this.state={

      }
  }

  render(){
    return (
      <>
        <div className="flex h-screen w-screen font-poppinsRegular items-center justify-center bg-gray-100">
              <div className="flex flex-col w-full items-center justify-center">
                 <div className=" font-poppinsSemiBold text-teal-700 text-5xl">Desmy Sample App</div>
                 <div className="mt-5 bg-black text-white px-10 py-4 rounded-lg cursor-pointer hover:bg-gray-100 hover:border-[1px] hover:border-black hover:text-black">Visit Documentation</div>
              </div>
             
        </div>
      </>
    )
  }
}

export default App