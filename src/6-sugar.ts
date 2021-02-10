import { getFruit } from "./3-async-await";
import { log } from "./2-create-promise";
const fruits = ["peach", "pineapple", "strawberry"];

export const fruitLoop = async () => {
  for (const f of fruits) {
    const emoji = await getFruit(f);
    log(emoji);
  }
};

export const fruitInspection = async () => {
  if ((await getFruit("peach")) === "🍑") {
    console.log("looks peachy!");
  }
};

import fetch from "node-fetch";

export const getTodo = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  const { title, userId, body } = await res.json();

  console.log(title, userId, body);
};
