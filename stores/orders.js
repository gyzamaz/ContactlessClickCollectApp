import { writable } from "svelte/store";

let items = [];

try {
  items = JSON.parse(localStorage.getItem("collect")) || [];
} catch (err) {
  items = [];
}

export const orders = writable(items);
