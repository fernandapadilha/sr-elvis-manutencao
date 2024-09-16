<script setup>
</script>
<template>
    <section>
        <div class="padding">
        <div class="container">
            <div class="item-cabecalho">Oferecemos um atendimento personalizado e orçamentos</div>

            <div class="item-menu-lateral">
            <p>No Sr. Elvis, estamos comprometidos em oferecer serviços de alta qualidade para atender todas as suas
                necessidades relacionadas a celulares. Nossa missão é proporcionar soluções rápidas e eficazes, garantindo a
                melhor experiência para você.</p>
            </div>

            <div class="item-principal"><img src="@/assets/img/laptop.png" alt="computador"></div>
        </div>
        </div>

    </section>
    <section>
        <div>
            <h4>Disponibilizamos uma vasta gama de peças de reposição e acessórios para celulares.</h4>
            <div class="imagens">
                <div class="contem"><img src="@/assets/img/capinha_amarela.jpg" alt="capa amarela" height="300px"></div>
                <div class="contem"><img src="@/assets/img/capa_preta_iphone.jpg" alt="capas-samsung" height="300px"></div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .padding {
  margin-top: 2%;
  background-color: var(--cor-blue);
  margin-bottom: 5%;
  display: grid;
}

.container {
  padding:10rem;
  display: grid;
  grid-template: 100px 150px 100px / 1fr 1fr;
  grid-template-areas:
    "cabecalho cabecalho cabecalho"
    "menu-lateral principal principal";

}
.item-cabecalho {
  grid-area: cabecalho;
  text-align: center;
  font-size: 1.7rem;

}

.item-menu-lateral {
  grid-area: menu-lateral;
  font-size: x-large;
}

.imagens {
  display: grid;
  align-items: center;
  grid-template-columns: 45% 55%;

}

.item-principal {
  grid-area: principal;
  text-align: right;
  height: 15rem;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

}

.contem {
  text-align: center;
  /* margin-top: 3%; 
   text-align: center;
  font-size: 1. */
  & img:hover {
    margin: -30px;
    height: 330px;
  }
}

h4 {
  font-size: 1.5rem;
  text-align: center;
  margin: 5%;
}

img {
  border-radius: 20px;
}

</style>