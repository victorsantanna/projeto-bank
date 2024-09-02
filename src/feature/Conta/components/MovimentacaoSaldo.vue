<template>
    <div class="container">
        <div class="conteudo-saldo">
            <p>Ultimas movimentações</p>
            <div class="conteudo-movimentacao">
                <h4>01 de agosto</h4>
                <div class="conteudo-saldo-info">
                    <p>Maria</p>
                    <p>R$ 250,00</p>
                </div>
            </div>
            <div class="conteudo-movimentacao">
                <h4>01 de agosto</h4>
                <div class="conteudo-saldo-info">
                    <p>Maria</p>
                    <p>R$ 250,00</p>
                </div>
            </div>
          <div>
            <button>Conferir Histórico Completo</button>
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

.conteudo-movimentacao{
    margin-top: 30px;
}

.conteudo-saldo {
    width: 600px;
    border: 2px solid #FEAA12;
    border-radius: 8px;
    padding: 15px ;
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.25);
}

.conteudo-saldo-info{
    display: flex;
    justify-content: space-between;
}
</style>