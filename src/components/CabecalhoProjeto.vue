<template>
  <div class="container">
    <div class="conteudo-cabecalho">
      <div>
        <img src="../assets/img/PaginaPrincipal/LogoPaginaPrincipal.png" alt="Logo">
      </div>
      <div class="lista-cabecalho">
        <ul>
          <li>Sobre Nós</li>
          <li>Segurança</li>
          <li>Serviços</li>
          <div class="lupa">
            <li>Buscar </li>
            <i class="fas fa-search"></i>
          </div>
        </ul>
      </div>
    </div>
    <div class="button">
      <router-link to="login">
        <button v-show="route.name !== 'login'">Entrar</button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 100px;
  height: 100px;
  width: 100%;
  font-family: 'Poppins' sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: var(--primary-color);
  background-color: #F5F5F5;
  border-bottom: 4px solid #FEAA12;
}

.conteudo-cabecalho {
  display: flex;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 100px;
}

.lista-cabecalho ul,
li {
  display: flex;
  flex-direction: row;
  gap: 50px;
  text-decoration: none;
  
}
.lista-cabecalho li{
  cursor: pointer;
}
button {
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 8px;
  background-color: #B3265F;
  color: #FFFFFF;
  font-weight: 600;
  cursor: pointer;
}

.lupa {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>