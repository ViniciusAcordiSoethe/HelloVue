<script setup>
import { ref } from 'vue'
const nome = ref('')
const email = ref('')
const idade = ref('')
const descricao = ref('')
const aceitaTermos = ref(false)
const cores = ref([])
const sexo = ref('')
const user = ref({
  avatar: null
})


function handleFileUpload(e){
  const target = e.target
  if(target && target.files){
    const file = target.files[0]
    user.value.avatar = URL.createObjectURL(file)
  }
}
</script>
<template>
    <div>
        <input type="text" v-model.trim="nome" maxlength="50"  minlength="3"/>
        <p> nome Digitado =  {{ nome }}</p>
        <input type="email" v-model.lazy="email" />
        <p> email Digitado =  {{ email }}</p>
        <input type="number" v-model.number="idade" />
        <p> idade Digitado =  {{ idade }}</p>
        <textarea v-model="descricao" />
        <p class="descricao"> descricao Digitado =  {{ descricao }}</p>
        <label for="aceitaTermos">Aceito os termos</label>
        <input type="checkbox" v-model="aceitaTermos" />
        <p>Aceita os termos: {{ aceitaTermos }}</p>
        <label for="cores">Cores favoritas</label>
        <input type="checkbox" v-model="cores" value="vermelho" /> Vermelho
        <input type="checkbox" v-model="cores" value="verde" /> Verde
        <input type="checkbox" v-model="cores" value="azul" /> Azul
        <p>Cores favoritas: {{ cores }}</p>
        <label for="sexo">Sexo</label>
        <select v-model="sexo" disabled>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
         </select>
        <p>Sexo: {{ sexo }}</p>
        <input type="file" id="avatar" @change="handleFileUpload($event)"/>
        <img :src="user.avatar" />
    </div>    
</template>
<style scoped>
.descricao{
  white-space: pre-line;
}
</style>