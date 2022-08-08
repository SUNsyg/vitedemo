/*
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-08-01 14:03:20
 * @LastEditTime: 2022-08-08 17:02:43
 * @LastEditors: Sun yinge
 */
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import user from './modules/user'
export default createStore({
  modules: {
    user
  },
  plugins: [createPersistedState({
    key: 'sun',
    paths: ['user']
  })],
});
