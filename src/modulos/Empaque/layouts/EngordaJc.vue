<template>
  <v-app id="inspire">
    <v-dialog
      v-model="privacidad"
      width="700"
      persistent
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Privacy Policy
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="privacidad = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      color="grey darken-3"
    >
      <v-list dense color="grey darken-3">
        <v-divider class="mt-3"></v-divider>
        <template>
          <v-list-group
            v-for="item in items"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="['mdi-clipboard-text']"
            append-icon=""
            active-class="primary darken-4"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title class="white--text">
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-group>
        </template>
        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="primary"
      dark
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
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
        <span>Usuario</span>
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
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    privacidad: true,
    dialog: false,
    drawer: false,
    sheet: false,
    tiles: [
      { icon: "mdi-account-cog", title: "Panel Administrador", href: "/panelAdmin/panelControl" },
      { icon: "mdi-exit-to-app", title: "Salir del sistema", href: "/" },
    ],
    items: [
      {
        text: "De todos los temas",
        model: true,
      },
      {
        text: "Populares de la semana",
        model: false,
      },
      {
        text: "Populares de siempre",
        model: false,
      },
      {
        text: "Retro alimentación",
        model: false,
      },
      {
        text: "Sin resolver",
        model: false,
      },
    ],
  }),
};
</script>
<style scoped>
.container {
  max-width: 1600px;
}
</style>