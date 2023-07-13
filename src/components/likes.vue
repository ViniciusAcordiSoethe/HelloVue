<script setup>
import {ref , onMounted} from 'vue'

const likes = ref(0)

function like(){
  likes.value++
}

function deslike(){
  if(likes.value > 0){
    likes.value--
  }
}  

function reset(){
  likes.value = 0
}


onMounted(()=>{
  console.log('Componente montado com sucesso e o valor de likes é: ' + likes.value)
})

// Metodo sem o setup
// export default{
//   data(){
//     return{
//       likes: 0
//     }
//   },
//   methods:{
//     like(){
//       this.likes++
//     },
//     deslike(){
//       this.likes--
//     },
//   }
// }
</script>
<template>
  <h1>Olá mundo estou usando Vue.js</h1>
  <br>
  <button @click="like">👍Like</button>
  <button @click="deslike">👎Deslike</button>
  <button @click="reset">0 Reset</button>
  <p>Likes: {{ likes }}</p>
</template>
<style scoped>
  button {
    font-weight: bold;
    border-radius: 8px;
    padding: 10px;
    margin: 3px;
  }
</style>