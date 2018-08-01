<template>
  <div id="upload">
    <v-container grid-list-xl text-xs-center>
      <v-layout row wrap>
        <v-flex xs10 offset-xs1>
          <h1>Escolha um arquivo em seu computador para enviar</h1>
        </v-flex>
      </v-layout>
    </v-container>
    <v-form v-model="valid">
      <v-text-field prepend-icon="attach_file" single-line color="info" label="Label" type="file"></v-text-field>
    </v-form>
  </div>
</template>

<script>

</script>

<style lang="scss">

</style>
