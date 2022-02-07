import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupDescription',

  props: {
    description: { type: String },
    organizer: { type: String },
  },

  template: `<p class="meetup-description">
  <p>{{ organizer }}</p>
  <p>{{ description }}</p>
  </p>`,
});
