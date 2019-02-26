const BASE_URL={
  dev:"http://www.fellow29.com/",
  pro:"http://www.xxx.com/"
}

let globalUrl = BASE_URL.dev

const URL = {
  getData1:globalUrl+"getData",
  getData2:globalUrl+"getData2",
  getData3:globalUrl+"getData3",
  getData4:globalUrl+"getData4",
  getData5:globalUrl+"getData5",
}

export default URL;