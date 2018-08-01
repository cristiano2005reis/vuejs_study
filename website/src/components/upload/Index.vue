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
      <v-text-field prepend-icon="attach_file" single-line
      :label="Label" :required="required"
      :disabled="disabled" ref="fileTextField"></v-text-field>
      <input type="file" :accept="accept" :multiple="multiple" :disabled="disabled"
      ref="fileInput">
    </v-form>
  </div>
</template>

<script>

</script>

<style lang="scss">

</style>
