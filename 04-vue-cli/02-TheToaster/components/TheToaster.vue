<template>
  <div class="toasts">
    <template v-for="(toast, index) in toasts" :key="index">
      <div v-if="toast.type == 'success_toast'" class="toast toast_success">
        <ui-icon class="toast__icon" icon="check-circle" />
        <span>{{ toast.messageLocal }}</span>
      </div>
      <div v-else-if="toast.type == 'error_toast'" class="toast toast_error">
        <ui-icon class="toast__icon" icon="alert-circle" />
        <span>{{ toast.messageLocal }}</span>
      </div>
    </template>
  </div>
</template>

<script>
import UiIcon from './UiIcon';

export default {
  name: 'TheToaster',

  components: { UiIcon },

  props: {
    autoHideDelay: { type: Number, default: 5000 },
  },

  data() {
    return {
      messageLocal: null,
      type: null,
      toasts: [],
    };
  },

  methods: {
    success(message) {
      this.messageLocal = message;
      this.type = 'success_toast';
      this.toasts.push({ messageLocal: message, type: 'success_toast', autoHideDelay: this.autoHideDelay });
      setTimeout(() => {
        this.toasts.splice(0, 1);
      }, this.autoHideDelay);
    },
    error(message) {
      this.messageLocal = message;
      this.type = 'error_toast';
      this.toasts.push({ messageLocal: message, type: 'error_toast', autoHideDelay: this.autoHideDelay });
      setTimeout(() => {
        this.toasts.splice(0, 1);
      }, this.autoHideDelay);
    },
  },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}

.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast__icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>
