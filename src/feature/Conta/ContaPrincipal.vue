<template>
  <div class="container">
    <CabecalhoProjeto />
    <div class="conteudo-componentes">
      <div class="conteudo-principal">
        <SaldoConta />
        <MovimentacaoSaldo />
      </div>
      <div class="conteudo-pagamento">
        <div class="pagamento-info">
          <RealizarPagamento />

        </div>
        <div class="pagamento-info">
          <RealizarPagamento />

        </div>
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

.conteudo-componentes{
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.conteudo-principal{
  display: flex;
  flex-direction: column; 
  gap: 20px;
  margin: 60px;
}

.conteudo-pagamento{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.pagamento-info{
  margin-top: 20px;
}

</style>