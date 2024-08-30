<script setup>
    
</script>

<template>
    <section>
        <div class="padding">
            <h3>EQUIPAMENTOS</h3>
        </div>
        <div class="body">
            <img class="img" src="../assets/img/capinha1.png" alt="capinhas xs">
            <img class="img" src="@/assets/img/capas.webp" alt="capinhas samsung">
            <p>R$109,90</p>
            <p>R$31,90</p> 
            <p>Capinha para celular Good Things Take Time</p>
            <p>capinha para Samsung</p>
        </div>
        <div class="body">
            <img class="img" src="@/assets/img/fone.png" alt="capinhas xs">
            <img class="img" src="@/assets/img/caixa-de-som.png" alt="capinhas samsung">
            <p>R$79,70</p>
            <p>R$200,00</p> 
            <p>Fone Bluetooth JBL  </p>
            <p>Caixa de som JBL </p>
        </div>
        <div class="body">
            <img class="img" src="@/assets/img/pelicula.png" alt="capinhas xs">
            <img class="img" src="@/assets/img/peliculasam.webp" alt="capinhas samsung">
            <p>R$45,50</p>
            <p>R$30,00</p> 
            <p>Película para Iphone</p>
            <p>Película para Samsung</p>
        </div>
    </section>
</template>

<style scoped>
.padding{
    padding: 2.3rem;
    background-color: var(--cor-blue);
    margin-top: 1rem
}
.img{
    height: 25rem;
    margin: 2%;
    align-items: center;
    border-radius: 15px;
    
}
.body{
    display: grid;
    align-items: center;
    grid-template-columns: auto auto;
    margin-left: 17%;
    margin-top: 5%;
    
  
  & img:hover {
    margin: -30px;
    height: 330px;}
}
p{
    text-align: auto auto;
    margin-left: 17%;
}
</style>