import React, { Component } from 'react'
import axios from 'axios'
import URL from '../service.config'
export default class Class7 extends Component {
  constructor(props) {
    super(props);
    this.state={
      dataList:[
        {
          id:'001',
          name:'小明',
          sex:'男',
          age:20
        },
        {
          id:'002',
          name:'小红',
          sex:'女',
          age:18
        },
        {
          id:'003',
          name:'小张',
          sex:'男',
          age:23
        },
        {
          id:'004',
          name:'小王',
          sex:'男',
          age:30
        }
      ]
    }
  }
  
  render() {
    let arr = this.state.dataList;
    let url = 'https://api.myjson.com/bins/9inum'
    let url2 = URL.getDate
    let url3 = URL.getDate2
    let url4 = URL.getDate3
    let url5 = URL.getData4
    let url6 = URL.getData5
    
  // fetch(url2)
  // .then(function(response) {
  //   return response.data.json();
  // })
  // .then(function(myJson) {
  //   console.log(myJson);
  // });
  axios.get(url6).then((res)=>{
    console.log(res);
  })


    let str = arr.map((item,index)=>{
      return(
        <li key={item.id}>{item.name}</li>
      )
    })
    return (
      <div>
        <ul>{str}</ul>
      </div>
    )
  }
}
