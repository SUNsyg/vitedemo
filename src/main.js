/*
 * @Description:
 * @Author: Sun yinge
 * @Date: 2022-08-01 14:03:20
 * @LastEditTime: 2022-08-10 14:52:57
 * @LastEditors: Sun yinge
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import store from './store';

createApp(App).use(store).use(router).mount("#app");
