<template>
  <div id="first-page">
    <v-container grid-list-xl text-xs-center>
      <v-layout row wrap>
        <v-flex xs10 offset-xs1>
          <h1>Primeira Aplicação Usando o Vue JS</h1>
          <p><b>Lorem Ipsum</b> é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
          <v-btn @click.prevent="backRoute" color="info">Voltar</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'FirstPage',
  data () {
    return {
      text: 'My First page using vue js'
    }
  },
  methods: {
    backRoute () {
      return window.history.back()
    }
  }
}
</script>

<style lang="scss">
#first-page {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  p {
    text-align: justify;
  }
}
</style>
