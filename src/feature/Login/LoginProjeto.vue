<template>
  <div class="container">
    <CabecalhoProjeto />
    <div class="conteudo-login">
      <div class="conteudo-form-login">
        <LoginFormulario />

      </div>
      <ImagemLogin />
    </div>

  </div>
</template>

<script setup>
import CabecalhoProjeto from '@/components/CabecalhoProjeto.vue';
import LoginFormulario from './components/LoginFormulario.vue';
import ImagemLogin from './components/ImagemLogin.vue';

</script>

<style scoped>
.conteudo-login{
  display: flex;
  justify-content: space-between;

  background-color: #F5F5F5;

}
.conteudo-form-login{
  width: 50%;
  justify-content: center;
}
</style>