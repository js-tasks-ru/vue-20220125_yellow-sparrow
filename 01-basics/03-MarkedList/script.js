import { defineComponent, createApp } from './vendor/vue.esm-browser.js';

// From https://jsonplaceholder.typicode.com/comments
const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
];

const app = defineComponent({
  name: 'app',
  data() {
    return {
      emails,
      markedEmails: [],
      filter: {
        search: '',
      },
    };
  },
  computed: {},
  mounted() {
    this.emails.forEach((email, i) => {
      this.markedEmails.push({
        id: i,
        status: 'none',
        name: email,
      });
    });
  },
  methods: {
    marking() {
      this.markedEmails.forEach((markedEmail) => (markedEmail.status = 'none'));
      if (this.filter.search) {
        this.markedEmails.forEach((markedEmail) => {
          if (markedEmail.name.includes(this.filter.search.toLowerCase())) {
            markedEmail.status = 'marked';
          }
        });
      }
    },
  },
});
createApp(app).mount('#app');
