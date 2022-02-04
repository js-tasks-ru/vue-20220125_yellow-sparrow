import { defineComponent, createApp } from './vendor/vue.esm-browser.js';

const app = defineComponent({
  name: 'app',
  data() {
    return {
      first: '',
      second: '',
      math: '',
    };
  },
  computed: {
    result() {
      if (this.math) {
        switch (this.math) {
          case 'sum':
            return this.first + this.second;
          case 'subtract':
            return this.first - this.second;
          case 'multiply':
            return this.first * this.second;
          case 'divide':
            return this.first / this.second;
        }
      }
      return 0;
    },
  },
});
createApp(app).mount('#app');
