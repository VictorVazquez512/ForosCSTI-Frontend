<template>
    <v-container fluid>
        <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="purple darken-4"
      dark
      dense
    >
      <v-toolbar-title style="width: 600px">
        <router-link
          to="/engorda/home"
          exact
          class="white--text text-decoration-none mr-2"
        >
          <v-icon class="mb-1 mr-2">mdi-home</v-icon>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="text-center">
        <span>Administrador</span>
        <v-bottom-sheet v-model="sheet">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="grey darken-3"
              v-bind="attrs"
              v-on="on"
              small
              fab
              elevation="2"
              class="ml-2"
            >
              <v-icon>mdi-account-circle</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-subheader>Menu de usuario</v-subheader>
            <v-list-item
              v-for="tile in tiles"
              :key="tile.title"
              @click="sheet = false"
            >
              <v-list-item-avatar>
                <v-avatar size="32px" tile>
                  <router-link
                    :to="tile.href"
                    class="grey--text text-decoration-none"
                  >
                    <v-icon>{{ tile.icon }}</v-icon>
                  </router-link>
                </v-avatar>
              </v-list-item-avatar>
              <v-list-item-title>
                <router-link
                  :to="tile.href"
                  class="grey--text text-decoration-none"
                  active-class="primary--text"
                >
                  {{ tile.title }}
                </router-link>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-bottom-sheet>
      </div>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <v-expand-transition>
          <router-view></router-view>
        </v-expand-transition>
      </v-container>
    </v-main>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        tiles: [
      { icon: "mdi-account-cog", title: "Menu Principal", href: "/engorda/home" },
      { icon: "mdi-exit-to-app", title: "Salir del sistema", href: "/" },
    ],
    })
}
</script>