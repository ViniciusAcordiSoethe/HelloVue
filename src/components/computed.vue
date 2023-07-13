<script setup>
import { ref, computed } from 'vue'

const professor =ref({
  'nome': 'Eduardo da Silva',
  'disciplina': 
  ['Programação Web1',
   'Programação Web2',
  ]
})

const possuiDisciplina = computed(() => {
  return professor.value.disciplina.length > 0 ? 'Sim' : 'Não'
})
</script>
<template>
<h1>Professores</h1>
<p>Nome: {{ professor.nome }}</p>
<p>Possui Disciplinas : {{ possuiDisciplina }} </p>

</template>
<style scoped>
</style>