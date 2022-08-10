/*
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-08-01 14:03:20
 * @LastEditTime: 2022-08-10 14:06:10
 * @LastEditors: Sun yinge
 */
import { defineStore } from 'pinia'

export const shop = defineStore('shop', {
  state: () => {
    return {
      shopList: ['鞋', '衣服']
    }
  },
  getters:{
  },
  actions:{
  }
})