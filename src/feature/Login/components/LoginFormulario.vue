<template>
    <div class="container">

        <div class="conteudo-login">
            <div class="conteudo-formulario">
                <h3>Acesse sua conta</h3>
                <div>
                    <div class="formulario-grupo">
                        <label for="">CPF/CNPJ</label>
                        <input type="text" placeholder="Digite o seu CPF/CNPJ">
                    </div>
                    <div class="formulario-grupo">
                        <label for="">Senha de acesso</label>
                        <input type="text" placeholder="Digite sua senha">
                    </div>
                </div>
                <p><a href="">Não lembra sua senha?</a></p>

                <button>Entrar na conta</button>

            </div>
        </div>
        <div></div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
    background-color: #F5F5F5;
    height: 83vh;
}

.linha-amarela span {
    display: block;
    width: 180%;
    height: 5px;
    background-color: #FEAA12;
    position: relative;
}

.linha-amarela span::after {
    content: '';
    position: absolute;
    top: 0;
    right: -20px;

    width: 0;
    height: 0;

    border-bottom: 5px solid transparent;
    border-left: 20px solid #FEAA12;
}


.conteudo-login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.conteudo-formulario {
    max-width: 350px;
    /* Define a largura máxima do formulário */
    margin: 0 auto;
    /* Centraliza o formulário horizontalmente */
}

.conteudo-formulario h3 {
    margin-top: 90px;
    margin-bottom: 20px;
    font-size: 20px;
    color: var(--primary-color);
    font-weight: 600;
}

.conteudo-formulario label {
    color: var(--primary-color);
    font-weight: 600;
    font-size: 16px;
    margin-top: 20px;
}

.conteudo-formulario input {
    width: 100%;
    height: 35px;
    border-radius: 8px;
    border: 1px solid #E4E4E4;
    padding: 10px;
    margin-top: 3px;
}

.formulario-grupo {
    display: flex;
    flex-direction: column;

}

.conteudo-formulario a {
    text-decoration: none;

    color: var(--primary-color);
    font-size: 12px;
    font-weight: 500;
}

.conteudo-formulario p {
    text-align: right;
    /* Alinha o texto à direita */
    margin-top: 2px;
    /* Ajusta a margem para ficar mais próximo do input */

}

.conteudo-formulario button {
    width: 350px;
    height: 35px;
    background-color: #B3265F;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 30px;
}
</style>