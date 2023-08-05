<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Button from '../components/buttons/button.vue'
import Close from '../components/icons/iconClose.vue'

interface DialogProps {
  title?: string
  handleClose: () => void
}

const { title = '', handleClose } = defineProps<DialogProps>()
const closeRef = ref<{ button: HTMLButtonElement }>()

onMounted(() => {
  closeRef.value?.button.focus()
})
</script>

<template>
  <dialog id="dialog" class="dialog" aria-labelledby="dialog-title" aria-describedby="dialog-description">
    <div class="dialog-wrapper">
      <div class="dialog-container">
        <header class="dialog-header">
          <h6 id="dialog-title" class="dialog-title">{{ title }}</h6>
          <Button
            id="dialog-header-close"
            ref="closeRef"
            title="close dialog"
            @click="handleClose"
            aria-controls="dialog"
          >
            <template #start><Close /></template>
          </Button>
        </header>
        <section class="dialog-content">
          <div class="content-area center">
            <img class="content-image" src="../assets/tech-1.png" alt="MacBook Pro" />
          </div>

          <div id="dialog-description" class="content-area center">
            <h6 class="content-area-title">Key Features</h6>
            <ul>
              <li>2.6 GHz Intel Core i7 6-Core (9th Gen)</li>
              <li>16GB of 2666 MHz DDR4 RAM | 8TB SSD</li>
              <li>16" 3072 x 1920 Retina Display</li>
              <li>AMD Radeon Pro 5600M GPU (8GB HBM2)</li>
            </ul>
            <p>
              The Apple 16" MacBook Pro features a 16" Retina Display, a Magic Keyboard with a redesigned scissor
              mechanism, a six-speaker high-fidelity sound system, and an advanced thermal design. This MacBook Pro also
              features an AMD Radeon Pro 5600M graphics card, a 7nm mobile discrete GPU designed for pro users. With 8GB
              of HBM2
            </p>
          </div>
        </section>

        <footer class="dialog-footer">
          <Button
            id="dialog-footer-close"
            class="button-secondary"
            title="close dialog"
            @click="handleClose"
            aria-controls="dialog"
            >Close</Button
          >
        </footer>
      </div>
    </div>
  </dialog>
</template>

<style scoped>
.dialog {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
  overscroll-behavior: contain;
  overflow-y: auto;
  border: none;
}

.dialog-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.dialog-container {
  max-height: calc(100vh - 5em);
  max-width: 684px;
  margin: 0px auto;
  padding: 40px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 10px 14px -4px rgba(0, 0, 0, 0.12);
  transition: all 0.3s ease;
  overflow-y: auto;
  overscroll-behavior: contain;
}

.dialog-content {
  max-height: 365px;
  overflow: auto;
  display: flex;
  font-family: Nunito Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 65px;
}

.content-area {
  flex: 1;
  flex-direction: column;
}

.content-image {
  position: relative;
  top: -20px;
}

.content-area-title {
  display: block;
  margin: 0 0 20px 0;
  width: 100%;
}

.content-area ul {
  display: block;
  padding: 0;
  margin: 0;
  width: 100%;
}
.content-area ul li {
  margin: 0 20px;
}

.dialog-header {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
}

.dialog-title {
  flex: 1;
  font-family: Inter;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
}

h6 {
  font-family: Nunito Sans;
  font-size: 12px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
}

@media screen and (max-width: 768px) {
  .dialog {
    background-color: transparent;
    top: 128px;
    padding: 0;
  }
  .dialog-wrapper {
    display: block;
    height: 100%;
  }

  .dialog-container {
    height: 100%;
  }

  .dialog-content {
    display: block;
    max-height: unset;
  }

  .dialog-title {
    text-align: center;
  }

  .content-area {
    flex: 0 0 100%;
  }

  .button-secondary {
    width: 100%;
  }
}
</style>
