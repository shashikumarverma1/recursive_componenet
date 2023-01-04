import React, { useState, useEffect } from "react";

export default function Family({ familyTree }) {
  const [isVisible, setIsVisible] = useState(false);
  const [treedata, settreedata] = useState(familyTree);
 const [showicon , setshowicon ] = useState ("v")

  const expand = () => {
    setIsVisible(!isVisible);
   if (showicon =="v"){
    setshowicon(">")
   }else{
    setshowicon("v")
   }
  };
  let obj = { name: "child", data: "c2 World" }
  const open_child =()=>{
    setshowicon(">")
    setIsVisible(true)
  }
  const Add = (e,i) => {

   let new_data_Add= { name: "new child", data: "c1-c1 Hello" }
  
    if(i.children ){
  
     settreedata(
      {...{ name: "new child",    children: [
        { name: "new child",   children: [
          { name: "new child", data: "c1-c1 Hello" },
        
      ]  },
      
    ] ,...i }  }
      
          )
    }else{
   settreedata(
        {...{ name: "new child",    children: [
          { name: "new child", data: "c1-c1 Hello" },
        
      ] ,...i }  }
         )
        

    }

  };
  console.log(treedata);
  return (
    <div  onClick={() => Add(familyTree)} style={{ paddingLeft: 10, border: "1px solid black" , marginLeft :5 , backgroundColor : "#D8D8D8" }}>
    
      <span
        style={{
          padding: 10,
          backgroundColor: "aqua",
          border: "1px solid black",
        }}
        
      >
        <span onClick={expand}>  <span style={{  backgroundColor: "white" , padding : "5px  20px"}}>{showicon}</span>
       <span  style={{ padding : "3px  20px"}}> {
        treedata.data ? <>{
          treedata.children ? <>{treedata.name}</> : <>{treedata.data}</>
          }</> : <>{treedata.children ? <>{treedata.name}</> : <>{treedata.data}</>}</>
       }</span></span>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            style={{ position: "fixed", left: "93vw", padding: "8px 30px" ,}}
            
             onClick={(e) =>{ Add(e,treedata)
            open_child();
            }}
          >
            Add
          </button>
        </div>
      </span>
      {isVisible ? (
        treedata?.children?.map((child) => {
          return (
            <div>
              <Family familyTree={child} />
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}
