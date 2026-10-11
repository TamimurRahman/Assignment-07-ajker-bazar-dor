
"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

function getDate() {
  return new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
    timeZone: "Asia/Dhaka",
  });
}

export default function HeaderDate() {
  const date = useSyncExternalStore(subscribe, getDate, () => "");

  return <div>{date || "\u00A0"}</div>;
}
