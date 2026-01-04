/*
 * @Date: 2026-01-04 09:17:50
 * @LastEditors: xiaolong.su
 * @LastEditTime: 2026-01-04 10:34:01
 * @Description:
 */
/**
 * @description: ContentType
 */
export enum ContentTypeEnum {
  // form-data qs
  FORM_URLENCODED = "application/x-www-form-urlencoded;charset=UTF-8",
  // form-data upload
  FORM_DATA = "multipart/form-data;charset=UTF-8",
  // json
  JSON = "application/json;charset=UTF-8"
}

/**
 * @description: 与后端协定的状态 code
 */
export enum ResultEnum {
  SUCCESS = 0,
  ERROR = 1
}
export enum ResultResponseEnum {
  SUCCESS = 200,
  ERROR = 10001
}
