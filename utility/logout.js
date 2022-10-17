import React from "react";
import { useRouter } from "next/router";

export const Logout = () => {
  localStorage.removeItem("Token");
  localStorage.removeItem("Role");
  window.location.href="/login"
};