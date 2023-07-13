<script setup>
 const numero = 1
 const ok = true
 const mensagem = 'Programar'

 const url = 'https://vuejs.org'

 function inverter(mensagem){
  return mensagem.split('').reverse().join('')
 }
</script>
<template>
{{ numero + 1 }}
<p v-if="ok">Sim</p>
<p>{{ inverter(mensagem) }}</p>


<br>
<br>
<br>

<a :href="url">Mais informações sobre Vue....</a>
</template>
<style scoped>
</style>