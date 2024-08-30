<template>
    <div class="container">
        <div class="conteudo-imagem">
            <img src="../../../assets/img/PaginaPrincipal/ImagemConteudoPrincipal.png" alt="Imagem Principal" loading="lazy">
        </div>
        <div class="conteudo-principal">
            <img src="../../../assets/img/PaginaPrincipal/LogoPaginaPrincipal.png" alt="logo">
            <h3>Lorem ipsum dolor sit amet, consectetur adi <br> piscing elit, sed do eiusmod.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br> do eiusmod tempor incididunt ut labore
                et
                dolore magna<br> aliqua. Ut enim ad minim veniam, quis nostrud exercitation<br> ullamco laboris nisi ut
                aliquip ex ea commodo
                consequat.
            </p>
            <button>Abra sua conta</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-evenly;
    background: linear-gradient(45deg,
            #030F37 0%,
            #0D6375 25%,
            #03A3A0 50%,
            #00B6AD 100%);
    height: 470px;
}

.conteudo-imagem {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
}

.conteudo-principal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 30px;
}

.conteudo-principal img {
    width: 300px;
}

.conteudo-principal h3 {

    font-weight: 500;
    font-size: 25px;
}

.conteudo-principal p {
    font-size: 16px;
}

.conteudo-principal h3,
.conteudo-principal p {
    text-align: right;
    color: #F5F5F5;
}

.conteudo-imagem img {
    width: 350px;
    height: auto;
}

.conteudo-principal button {
    background-color: #F65935;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 500;
    border: none;
    border-radius: 8px;
    width: 220px;
    height: 45px;
    cursor: pointer;
}
</style>