import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Heading from "./Heading";
import Sdata from "./Sdata";

// we can escape from repating the cards again and again by using map and fat arrrow function of Javascript
// The map() method creates a new array with the results of calling a function for every array element
// It can be array of objects also and we can access the properties of object using (.)
// we can use Arrow function also according to ES6
// The map() method does not do anything to the old array just makes a new array out of old array
// The map() method calls the provided function once sfor each element in an array , in order
// Syntax array.map(function(current_value,index,arr),thisValue)
// currentValue is required that si the value of current elememt , index is optional and is always started from 0 , arr is optional and it is the array object which the current element belongs to
// Each child/card should have a unique key that is id for each child in the array of object so that we can access it later using that key and its name should be 'key' only
// if we need to write if-else statement we need to do it outside component function and create a separate function for it using arrow function
// and call that function in place of if-else condition inside component function like
/*
const choice = "amazon";

const FavS = () => {
  if (choice === "netflix") {
    return (
      <App
        key={Sdata[0].id}
        imgsrc={Sdata[0].imgsrc}
        name={Sdata[0].name}
        link={Sdata[0].link}
      />
    );
  } else {
    return (
      <App
        key={Sdata[2].id}
        imgsrc={Sdata[2].imgsrc}
        name={Sdata[2].name}
        link={Sdata[2].link}
      />
    );
  }
};

now just call <FavS/> inside render()
*/

// Ternary Operator in ReactJs
// Syntax =>  condition ? ifTrue : ifFalse
// {FavS === 'netflix' ? return .... : return ...} inside render function

// Object Destructuring
/*
Instead of doing
let x = props.x;
let y = props.y;
let z = props.z;

we can simply use object destructuring in ES6
let {x,y,z} = props;

Above line is same as doing x,y,z separately
*/

ReactDOM.render(
  <>
    <Heading imgsource="https://cdn.vox-cdn.com/thumbor/Yq1Vd39jCBGpTUKHUhEx5FfxvmM=/39x0:3111x2048/1200x800/filters:focal(39x0:3111x2048)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png" />
    <div
      className="cards"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        alignContent: "center",
      }}
    >
      {Sdata.map((val) => {
        return (
          <App
            key={val.id}
            imgsrc={val.imgsrc}
            name={val.name}
            link={val.link}
          />
        );
      })}
    </div>
  </>,
  document.getElementById("root")
);
