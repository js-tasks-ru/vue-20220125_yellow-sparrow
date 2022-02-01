import { defineComponent, createApp } from './vendor/vue.esm-browser.js';

const app = defineComponent({
  name: 'app',
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
  },
});
const init = createApp(app);
init.mount('#app');
