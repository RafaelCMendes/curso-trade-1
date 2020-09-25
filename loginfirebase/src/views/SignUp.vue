<template>
  <div class="sign-up">

    <h1>Crie uma nova conta</h1>

    <input 
        type="text" 
        placeholder="Email"
        v-model="email" />
    <br />

    <input 
        type="password" 
        placeholder="Senha"
        v-model="senha" />
    <br />

    <button @click="signUp">Registrar</button>

    <span>
      ou retorne ao
      <router-link to="/">login</router-link>
    </span>

  </div>
</template>

<script>

import firebase from "firebase"

export default {
  nome: "sign-up",

  data() {
    return {
        email: '',
        senha: ''
    };
  },

  methods: {
      signUp(){
         firebase.auth().createUserWithEmailAndPassword(this.email, this.senha).then(
             (user) => {
                 user;
                 this.$router.replace('/');
             },
             (err) => {
                 alert('Aconteceu algo inesperado. ' + err.message)
             }
         );
      },
  },
};
</script>

<style scoped>
</style>