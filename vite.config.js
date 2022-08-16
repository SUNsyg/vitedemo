/*
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-08-01 14:03:20
 * @LastEditTime: 2022-08-16 14:32:51
 * @LastEditors: Sun yinge
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports:['vue','vue-router']//自动导入vue和vue-router相关函数
    })
  ],
  server:{
		proxy:{
			'/api':'http://testapi.xuexiluxian.cn'
		}
	}
})
