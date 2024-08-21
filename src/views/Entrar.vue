<script setup>
import { reactive } from 'vue';
    defineProps(['validacao']);

    const cadastro = reactive({
        nome: '',
        email: '',
        senha: '',
        cpf: '',
        dataNascimento: '',
        telefone: '',
        rua: '',
        cep: '',
        cidade: '',
        estados: [
            { sigla: 'AC', nome: 'Acre' },
            { sigla: 'AL', nome: 'Alagoas' },
            { sigla: 'AP', nome: 'Amapá' },
            { sigla: 'AM', nome: 'Amazonas' },
            { sigla: 'BA', nome: 'Bahia' },
            { sigla: 'CE', nome: 'Ceará' },
            { sigla: 'DF', nome: 'Distrito Federal' },
            { sigla: 'ES', nome: 'Espírito Santo' },
            { sigla: 'GO', nome: 'Goiás' },
            { sigla: 'MA', nome: 'Maranhão' },
            { sigla: 'MT', nome: 'Mato Grosso' },
            { sigla: 'MS', nome: 'Mato Grosso do Sul' },
            { sigla: 'MG', nome: 'Minas Gerais' },
            { sigla: 'PA', nome: 'Pará' },
            { sigla: 'PB', nome: 'Paraíba' },
            { sigla: 'PR', nome: 'Paraná' },
            { sigla: 'PE', nome: 'Pernambuco' },
            { sigla: 'PI', nome: 'Piauí' },
            { sigla: 'RJ', nome: 'Rio de Janeiro' },
            { sigla: 'RN', nome: 'Rio Grande do Norte' },
            { sigla: 'RS', nome: 'Rio Grande do Sul' },
            { sigla: 'RO', nome: 'Rondônia' },
            { sigla: 'RR', nome: 'Roraima' },
            { sigla: 'SC', nome: 'Santa Catarina' },
            { sigla: 'SP', nome: 'São Paulo' },
            { sigla: 'SE', nome: 'Sergipe' },
            { sigla: 'TO', nome: 'Tocantins' }
        ]
    }); 
    
</script>

<template>
    <form v-if="!validacao" class="cadastro">
      <h2>Cadastro</h2>

      <div class="form-group">
        <label for="">Nome:</label>
        <input class="form-control" type="text" v-model="cadastro.nome" />
      </div>

      <div class="form-group">
        <label for="">Email:</label>
        <input class="form-control" type="text" v-model="cadastro.email" />
      </div>

      <div class="form-group">
        <label for="">Senha:</label>
        <input class="form-control" type="password" v-model="cadastro.senha" />
      </div>

      <div class="form-group">
        <label for="">CPF:</label>
        <input class="form-control" type="password" v-model="cadastro.cpf" />
      </div>

      <div class="form-group">
        <label for="">Nascimento:</label>
        <input class="form-control" type="text" v-model="cadastro.dataNascimento" />
      </div>

      <div class="form-group">
        <label for="">Telefone:</label>
        <input class="form-control" type="text" v-model="cadastro.telefone" />
      </div>

      <div class="form-group">
        <label for="estado">Estado:</label>
        <select class="form-control" name="estado" id="estado" v-model="cadastro.estado">
          <option v-for="estado in cadastro.estados" :key="estado.sigla" :value="estado.sigla"> {{ estado.nome }} </option>
        </select>
      </div>

      <div class="form-group">
        <label for="">Hobbie:</label>
        <input class="form-control" type="text" v-model="cadastro.hobbie" />
      </div>

      

      <div>
        <button type="button" class="btn btn-primary" @click="$emit('envio', {...cadastro})"> Mostrar </button>
      </div>
    </form>

</template>

<style scoped>
 
</style>