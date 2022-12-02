import { reactive } from 'vue';

export const store = reactive({
	theDate: new Date(),
  //debugValue: process.env.VUE_APP_DEBUG,
  debugValue: false,
})