import React, { useState } from "react";
import { instance } from "../axios/admin-instance";
import { baseURL } from "../const";
export const getData = async (endpoint) => {
  let res = await instance.get(endpoint);
  if (res && res.data) {
    return res.data;
  } else {
    return null;
  }
};
