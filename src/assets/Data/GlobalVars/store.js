import { reactive } from 'vue';

export const store = reactive({
  theDate: new Date(),
  debugValue: process.env.NODE_ENV === "production" ? false : true,
  //debugValue: false,
})