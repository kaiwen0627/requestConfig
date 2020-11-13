import server from "../util/axiosConfig";
// 修改axios基本配置，请求配置
function request({
  url,
  method = "get",
  queryParm = {},
  body = {},
  pathParm = null,
  config = {},
}) {
  const configAxios = {
    method,
    ...config,
    url: dealRequestUrl(url, pathParm),
  };
  switch (method) {
    case "get":
      configAxios.params = queryParm;
      break;

    default:
      // 请求方法 'PUT', 'POST', 和 'PATCH'
      configAxios.data = body;
      break;
  }
  console.log('configAxios', configAxios)
  return server(configAxios);
}

function dealRequestUrl(url, pathParm) {
  if (!pathParm) return url;
  let dealurl = url;
  Object.keys(pathParm).forEach((ele) => {
    url.replace(new RegExp(ele, "ig"), pathParm[ele]);
  });
  return dealurl;
}
class GenerateServer {
  constructor(url) {
    this.url = url;
  }
  getdata(parm) {
    console.log('parm', parm)
    return request({ ...parm, method: "get", url: this.url });
  }
  postdata(parm) {
    return request({ ...parm, method: "post", url: this.url });
  }
  deletedata(parm) {
    return request({ ...parm, method: "delete", url: this.url });
  }
}
export default GenerateServer;
