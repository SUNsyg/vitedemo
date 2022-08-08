/*
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-08-01 14:03:20
 * @LastEditTime: 2022-08-08 16:08:56
 * @LastEditors: Sun yinge
 */
import { createStore } from "vuex";

export default createStore({
  state: {
    num: 10,
    sum:10,
    str: '这是store数据'
  },
  getters:{
    total(state) {
      return state.sum + state.num;
    }
  },
  mutations: {
    changeNum(state, val) {
      state.num = val;
    }
  },
  actions: {
    changeBtn() {
      alert(1)
    }
  },
  modules: {},
});
