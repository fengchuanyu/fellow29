import Mock from 'mockjs'
import data from './data.json'

Mock.mock("https://api.myjson.com/bins/9inum",{dataList:data})
Mock.mock("https://www.fellow29.com/getData",{
  "name|2":"fellow29",
  'age|5-10':4
})
Mock.mock("https://www.fellow29.com/getData2",{
  "list|10-20":[
    {
      'id|+1':1,
      "name":'@first @last',
      "text":"@cword(10,15)",
      "time":"@time(hh:mm:ss)",
      'cname':'@cname',
      'img':'@img(100X100)',

    }
  ]
})

let Random = Mock.Random;



let TestDataList =()=>{
  let list = [];
  for(let i=0;i<10;i++){
    let obj = {
      name:Random.cname(),
      id:Random.integer(10000,99999),
      img:Random.dataImage('125x125','小伙伴'+Random.integer(1,100)),
      address:Random.province()
    }
    list.push(obj);
  }
  return list;
}

Mock.mock("https://www.fellow29.com/getData3",{data:TestDataList})