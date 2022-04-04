<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import User from "../../classes/userClass"
import { LoginStore } from '../../stores/LoginStore'

const store = LoginStore()
const router = useRouter()
const hasUser = ref(null)
const hasPassword = ref(null)
const username = ref('')
const password = ref('')
const isSuperUser = ref(null)

function login() {
  if (username.value && password.value) {
    const user = new User(null, null, null, username.value, password.value, null)
    hasUser.value = store.hasUser(user)
    hasPassword.value = store.hasPassword(user)
    isSuperUser.value = store.isSuperUser(user)

    if (hasUser.value && hasPassword.value) {
      store.setIsLogged(true)
      if(isSuperUser.value){
        store.setIsSuperUser(true)
      }
      router.push({ name: 'apartment' })
    }
  } else {
    if (!username.value) hasUser.value = false
    if (!password.value) hasPassword.value = false
  }
}
</script>
<template>
  <div class="outer-container">
    <div class="row bord p-5 shadow m-5" id="container">
      <div v-if="!store.isLogged">
        <h1>Login</h1>
        <form class="row g-3" id="login-form" @submit.prevent="login">
            <span class="input-alert" v-if="hasUser === false">Sorry, this user don't exists!</span>
            <span class="input-alert" v-if="hasPassword === false">Incorrect password!</span>
          <div class="col-md-6 pt-3">
            <input
              type="text"
              id="username"
              v-model="username"
              :class="{ invalid: hasUser === false }"
              placeholder="User name"
            />
          </div>
          <div class="col-md-6 pt-3">
            <input
              type="password"
              id="password"
              v-model="password"
              :class="{ invalid: hasPassword === false }"
              placeholder="Password"
            />
          </div>
          <div class="col pt-2 text-right">
            <button class="p-2 px-4 btn btn-primary shadow-lg">Login</button>
          </div>
        </form>
      </div>
      <div v-else class="v-container">
        <h3>User already logged</h3>
        <a href="#" @click="store.logout">LOGOUT</a>
      </div>
    </div>
  </div>
</template>
<style>
.outer-container {
  display: flex;
  justify-content: center;
}
#container {
  max-width: 500px;
}
#login-form {
  display: flex;
  flex-direction: column;
}
</style>