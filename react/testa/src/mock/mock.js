import Mock from 'mockjs'
import data from './data'
import URL from '../service.config'

Mock.mock(URL.getData,{data:data})
Mock.mock(URL.getData2,{
  'name|2':'fellow',
  'age|20-30':20
})
Mock.mock(URL.getData3,{
  'reg1':/[a-z]{1,5}/,
  'reg2':/\d{3,5}/
})
Mock.mock(URL.getData4,{
  'list|10-20':[
    {
      'id|+1':1,
      'name':'@first @last',
      'id':'@integer(10000,99999)',
      'date':'@datetime',
      'img':'@image("200*200")',
      'text':"@sentence(6,22)"
    }
  ]
})

let Random =Mock.Random
let dataList = ()=>{
  let infoList=[]
  for(let i=0;i<100;i++){
    let obj = {
      title:Random.ctitle(5,20),
      img:Random.dataImage('125x125','小伙伴'+Random.integer(1,100)),
      price:Random.integer(1,10000),
      owner:Random.cname()
    }
    infoList.push(obj);
  }
  return infoList
}
Mock.mock(URL.getData5,{dataList})