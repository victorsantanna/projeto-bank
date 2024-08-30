<template>
  <div class="container">
    <CabecalhoProjeto />
    <div>
      <div class="conteudo-principal">
        <SaldoConta />
        <MovimentacaoSaldo />
      </div>
      <div>
        <RealizarPagamento />
      </div>
    </div>
  </div>
</template>

<script setup>
import CabecalhoProjeto from '@/components/CabecalhoProjeto.vue';
import SaldoConta from './components/SaldoConta.vue';
import MovimentacaoSaldo from './components/MovimentacaoSaldo.vue';
import RealizarPagamento from './components/RealizarPagamento.vue';

</script>

<style scoped>
.container{
  background-color: #F5F5F5;
  
}

.conteudo-principal{
  display: flex;
  flex-direction: column; 
  gap: 20px;
  margin: 60px;
}

</style>