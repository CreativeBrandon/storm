<script setup lang="ts">
import Button from './buttons/button.vue'
import NotificationIcon from './icons/notification.vue'
import SettingsIcon from './icons/settings.vue'
import MenuIcon from './icons/iconMenu.vue'
import UserIcon from './icons/iconUser.vue'
import Logo from './icons/logo.vue'
import Search from './search.vue'
import { store } from '../store'

const user = { fullName: 'Adriana Arias' }

const handleSearch = (term: string) => {
  store.searchTerm = term
  store.results = store.data.filter((item) => item.product.toLowerCase().includes(term.toLowerCase()))
}
</script>

<template>
  <header class="layout-header">
    <div class="header-left">
      <Logo />
    </div>

    <Button title="Menu" class="center icon menu">
      <MenuIcon />
    </Button>

    <div class="header-center">
      <Search :onChange="handleSearch" />
    </div>

    <div class="header-right">
      <Button title="Settings" class="center icon">
        <SettingsIcon />
      </Button>
      <Button title="New message!" class="center icon">
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
  flex: 1;
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

button.menu {
  display: none;
}

@media screen and (max-width: 768px) {
  button.menu {
    display: flex;
    gap: 4px;
  }

  .header-left {
    max-width: unset;
  }

  .layout-header {
    flex-wrap: wrap;
    gap: 10px;
  }
  .header-center {
    max-width: unset;
    flex: 0 0 100%;
  }

  .header-right {
    display: none;
  }

  .search-box {
    flex: 1;
  }
}
</style>
