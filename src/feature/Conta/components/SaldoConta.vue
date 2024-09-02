<template>
  <div class="container">
    <h2>Seu StefBank</h2>
    <div class="conteudo-saldo">
      <p>Saldo Total</p>
      <div class="conteudo-saldo-info">
        <p>R$</p>
        <p>16.000,00</p>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.container {
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.container h2{
  margin-bottom: 40px;
  color: var(--primary-color);
}

.conteudo-saldo {
  width: 600px;
  border: 2px solid #FEAA12;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.25);
}

.conteudo-saldo-info {
  display: flex;
  justify-content: space-between;
}
</style>