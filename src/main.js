/*
 * @Description:
 * @Author: Sun yinge
 * @Date: 2022-08-01 14:03:20
 * @LastEditTime: 2022-08-09 15:33:24
 * @LastEditors: Sun yinge
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { createPinia } from 'pinia';

createApp(App).use(createPinia()).use(router).mount("#app");
