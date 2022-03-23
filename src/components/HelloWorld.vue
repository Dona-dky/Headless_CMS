<template>
  <div class="hello">
    <h1>{{ msg }} {{ name }}</h1>
    <input type="text" v-model="name" />
    <p>{{ name }}</p>
    <h1>{{ count }}</h1>
    <button @click="add()">Ajouter</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  // Fonction qui return un objet
  data() {
    return{
      name: 'Don',
      count: 0,
    };
  },
  
  //toujours mounted avant methods:
  mounted(){
    this.set();
  },

  //comprends des classes
  methods: {
    add(){
      // console.log("Hello")
      this.count++;
    },
    set(){
      this.count = 3;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
