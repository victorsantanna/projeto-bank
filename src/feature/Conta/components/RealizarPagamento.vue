<template>
  <div class="container">
    <div class="conteudo-info">
      <p>Realizar Pagamento</p>
      <div class="conteudo-info-botoes">
        <button>Fazer transferência</button>
        <button>Transação de Pix</button>
      </div>
      <a href="">Conferir dados da conta</a>

    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.container {
  max-width: 400px;
  width: 300px;
  
  
}

.conteudo-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #FEAA12;
  border: 1px solid #F18229;
  border-radius: 8px;
  padding: 30px;
  
}

.conteudo-info p{
  color: #FFFFFF;
}

.conteudo-info a{
  font-size: 12px;
  color: var(--primary-color);
  font-weight: 600;
  text-align: end;
}

.conteudo-info-botoes{
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.conteudo-info-botoes button{
  border-radius: 8px;
  border: none;
  font-weight: 600;
  height: 24px;
  text-align: left;
  padding-left: 8px;
  background-image: url('@/assets/img/Conta/seta.png'); /* URL da imagem da seta */
  background-repeat: no-repeat;
  background-position:right; 
  
}
</style>