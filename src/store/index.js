/*
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-08-10 14:53:19
 * @LastEditTime: 2022-08-10 14:54:11
 * @LastEditors: Sun yinge
 */
import { createPinia } from 'pinia'
// 引入pinia持久化存储插件
import piniaPluginPersist from 'pinia-plugin-persist'

const store = createPinia()
// 使用这个插件
store.use(piniaPluginPersist)

export default store