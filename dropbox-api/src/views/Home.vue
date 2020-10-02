<template>
  <div class="home">
    <button @click="list">carrega</button>

  <ul id="example-1">
  <li v-for="item in files" :key="item.name">
    {{ item.name }}
  </li>
</ul>

  </div>
</template>

<script>
// @ is an alias to /src

const { Dropbox } = require('../teste/dropbox');

var files = [{}];

export default {
  name: 'Home',
  
data: ()=> {
    return {
      files
    }
  },

  methods:{
    list(){


 const dbx = new Dropbox({ accessToken: 'fTlXC_o880AAAAAAAAAAAdof2yxz-P2K8XIm4z3aMkcNRn8DEXKf-zaGhRefTSWo' });     

      dbx.filesListFolder({path: '/win'})
        .then(function(response) {
          console.log('response', response.entries)
           
          this.files = response.entries;
        })
        .catch(function(error) {
          console.error(error);
        });



    },
  }
}
</script>
