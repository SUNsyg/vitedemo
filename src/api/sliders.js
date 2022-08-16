/*
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-08-16 14:42:14
 * @LastEditTime: 2022-08-16 14:42:41
 * @LastEditors: Sun yinge
 */
import request from '../utils/request'

export function getSliders(){
	return request({
		url:'/api/slider/getSliders'
	})
}