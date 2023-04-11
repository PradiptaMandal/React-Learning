//const heading = React.createElement("h1", {id:"heading"}, "Hello World From Raect");
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
   [ React.createElement("h1", {}, "I am the div tag inside parent"), React.createElement("h2", {}, "I am another div tag inside parent")]
  )
);
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
