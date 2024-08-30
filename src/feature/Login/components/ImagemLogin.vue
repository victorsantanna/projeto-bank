<template>
    <div class="container">
        <div class="conteudo-imagem-login">
            <img src="../../../assets/img/PaginaPrincipal/LogoPaginaPrincipal.png" alt="imagem logo">
            <p>Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod.</p>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
    width: 50%;
    height: auto;
    display: flex;
    background: linear-gradient(45deg,
            #030F37 16%,
            #0D6375 35%,
            #03A3A0 60%,
            #00B6AD 100%);

}

.conteudo-imagem-login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;

}

.conteudo-imagem-login img {
    width: 320px;
    margin-bottom: 30px;
}

.conteudo-imagem-login p {
    font-size: 32px;
    font-weight: 500;
    color: #FFFFFF;
    text-align: center;
}
</style>