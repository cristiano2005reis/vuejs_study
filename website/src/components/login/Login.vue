<template>
    <div id="login">
        <v-container grid-list-xl text-xs-center>
            <v-layout row wrap>
                <v-flex xs10 offset-xs1>
                    <h1 class="header">Formulário de Login</h1>
                </v-flex>
            </v-layout>

            <v-layout row wrap>
                <v-flex xs4 offset-xs4>
                    <v-form
                        ref="form"
                    >
                        <v-layout row>
                            <v-text-field
                                v-model="req.login"
                                label="Digite seu login"
                                required
                            ></v-text-field>
                        </v-layout>

                        <v-layout row>
                            <v-text-field
                                v-model="req.senha"
                                label="Digite sua senha"
                                required
                            ></v-text-field>
                        </v-layout>

                        <v-checkbox
                            v-model="req.lembrar"
                            label="Lembrar seus dados?"
                        ></v-checkbox>
                    
                        <v-btn
                            color="warning"
                            @click="logar"
                        >
                            Entrar
                        </v-btn>
                    </v-form>
                </v-flex>
            </v-layout>
            <v-layout v-if="mensagem.length" row wrap>
                <v-flex xs4 offset-xs4>
                    <p> {{ mensagem }} </p>
                    <p> {{ req.login }} </p>
                    <p> {{ req.senha }} </p>
                    <p> {{ req.lembrar }} </p>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
  data () {
    return {
      req: {
        login: '',
        senha: '',
        lembrar: false
      },
      mensagem: ''
    }
  },
  methods: {
    logar () {
      this.mensagem = 'Parabéns, você está logado'
      return this.mensagem
    }
  }
}
</script>

<style>
.header {
    color: blue;
}
</style>

