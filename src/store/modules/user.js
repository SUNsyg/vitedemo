/*
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-08-08 16:13:15
 * @LastEditTime: 2022-08-08 16:51:08
 * @LastEditors: Sun yinge
 */
export default {
    state: {
        userInfo: 'info'
    },
    mutations: {
        changeInfo(state) {
          state.userInfo = '123';
        }
      }
}