import generateServer from '../generateServer';
import {userInfoUrl} from '../url';

export default{
  // 获取手机用户信息
  getUserName: new generateServer(userInfoUrl.getPhoneNumber),
  getUserList: new generateServer(userInfoUrl.getUserList)
}