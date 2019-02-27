import React, { Component } from 'react'
import axios from 'axios'
import URL from '../service.config'

export default class Class7 extends Component {
  constructor(props) {
    super(props);
    this.state={
      dataList:[]
    }
  }
  componentDidMount(){
    let url = 'https://api.myjson.com/bins/9inum';
    let url1 = 'https://www.fellow29.com/getData';
    let url2 = 'https://www.fellow29.com/getData2';
    let url3 = URL.getData3
    axios.get(url3).then((res)=>{
      // com = res.data.data.map((item,index)=>{
      //   return(
      //     <li key={item.id}>
      //       <div>{item.name}</div>
      //       <div><img src="{item.img}" alt=""/></div>
      //       <div>{item.address}</div>
      //     </li>
      //   )
      // })
      this.setState({
        dataList:res.data.data
      })
      
    })
  }
  render() {
    let com = null;
    let nowList = this.state.dataList;
    com = nowList.map((item,index)=>{
      return(
        <li key={item.id}>
          <div>{item.name}</div>
         <div><img src={item.img} alt=""/></div>
         <div>{item.address}</div>
        </li>
      )
    })
    return (
      
      <div>
        <ul>
          {com}
        </ul>
      </div>
    )
  }
}
