import css from "./css/main.css";
import scss from "./css/index.scss";
let json = require("../author.json");
// import $ from "jquery";
let a = 10;
let fellow = 20;
var oBox = document.querySelector("#box");
oBox.innerHTML = "作者"+json.author
// $(".div1").html("hello jquery")
let arr = [1,23,4,5,6,7,5];
console.log(Array.from(new Set(arr)));
