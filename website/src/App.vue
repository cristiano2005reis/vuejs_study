<template>
  <div id="app">
    <v-app>
      <header>
        <v-toolbar dark color="primary">
          <v-toolbar-title class="white--text">Database Empresas</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>
      </header>
      <main>
        <router-view></router-view>
      </main>
      <v-footer app>
        <div>v.{{ '1.0.0' }}</div>
        <v-spacer></v-spacer>
        <div>SEBRAE &copy; {{ new Date().getFullYear() }}</div>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
}
</style>
