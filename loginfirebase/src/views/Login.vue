<template>
  <div class="login">
    <h1>Login</h1>

    <input 
        type="text" 
        placeholder="Email" 
        v-model="email"/>
    <br />

    <input 
        type="password" 
        placeholder="Senha"
        v-model="senha" />
    <br />

    
    <button @click="logar">Logar</button>


    <p>
      Você não tem conta?
      <router-link to="/registrar">crie uma conta</router-link>
    </p>
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
      logar(){
         firebase.auth().signInWithEmailAndPassword(this.email, this.senha).then(
             (user) => {
                 user;
                 this.$router.replace('home');
                 alert(`Bem Vindo, ${this.email}`);
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