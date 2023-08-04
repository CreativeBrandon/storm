<script setup lang="ts">
import Button from './buttons/button.vue'
import NotificationIcon from './icons/notification.vue'
import SettingsIcon from './icons/settings.vue'
import UserIcon from './icons/iconUser.vue'
import Logo from './icons/logo.vue'

const user = { fullName: 'Adriana Arias' }
</script>

<template>
  <header class="layout-header">
    <div class="header-left">
      <Logo />
    </div>

    <div class="header-center"></div>

    <div class="header-right">
      <Button title="Settings" class="center icon settings">
        <SettingsIcon />
      </Button>
      <Button title="New message!" class="center icon notifications">
        <NotificationIcon :has-message="true" />
      </Button>

      <div class="user">
        <Button :title="user.fullName" class="user-button">
          <template #start>
            <UserIcon aria-hidden="true" focusable="false" />
          </template>
          <template #label>{{ user.fullName }}</template>
        </Button>
      </div>
    </div>
  </header>
</template>

<style>
.layout-header {
  display: flex;
  flex-flow: row;
  align-items: center;
  margin: 80px 0 76px;
}

.header-left {
  align-self: auto;
  flex-grow: 1;
  max-width: 55.22%;
}

.header-center {
  flex: 1;
  max-width: 373px;
}

.header-right {
  align-self: auto;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-left: 10px;
}

.user-button {
  margin-right: 1px;
  width: 152px;
}

.button-label {
  color: var(--primary-main);
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.02em;
}
</style>
