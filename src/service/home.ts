import { request } from "umi";

export const getHomeDoctors = () => {
  return request('/home/doctors')
}