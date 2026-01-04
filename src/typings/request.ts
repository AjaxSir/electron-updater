/*
 * @Date: 2026-01-04 10:20:23
 * @LastEditors: xiaolong.su
 * @LastEditTime: 2026-01-04 10:21:58
 * @Description:
 */
interface RequestResponse {
  code: number;
  data: any;
  msg: string;
  ok: boolean;
  dataType: number;
}

export type { RequestResponse };
