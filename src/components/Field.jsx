 import React from "react";
 const Field =  ({ label, htmlFor, error, children }) => {
    const id = htmlFor || getChilId(children)
  return (
    <>
      <div className="flex flex-col justify-start mt-2 mr-2  w-1/5 ">
        {label && <label htmlFor={id}> {label}</label>}
        {children}
        {!!error && <div className="text-red-500"> {error.message}</div>}
      </div>
    </>
  );
}


const getChilId  = (children)=>{
    const child = React.Children.only(children)
    if( child && "id" in child.props){
        return child.props.id
    }
}
export default Field;