<template>
  <v-container class="contenido pa-0">
    <v-app>
      <v-card>
        <v-container fluid class="pa-1">
          <v-row>
            <v-col cols="12" md="3" class="d-flex align-center">
              <v-container class="pa-1 pt-3 d-flex justify-center">
                <v-row justify="center">
                  <v-dialog v-model="modalDiscusion" max-width="600px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        class="
                          blue
                          lighten-5
                          d-flex
                          justify-center
                          align-center
                        "
                        color="primary darken-2"
                        outlined
                        v-bind="attrs"
                        v-on="on"
                      >
                        <v-icon left dark>mdi-comment-plus-outline</v-icon>
                        Nueva discusión</v-btn
                      >
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="text-h5"
                          >Nueva Discusión <span class="text-caption">/ {{vista}}</span></span
                        >
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12" sm="6" md="12">
                              <v-text-field
                                label="Titulo de la discusión"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="12">
                              <v-textarea label="Descripción"></v-textarea>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="primary darken-1"
                          text
                          @click="modalDiscusion = false"
                        >
                          Cerrar
                        </v-btn>
                        <v-btn
                          color="primary darken-1"
                          text
                          @click="modalDiscusion = false"
                        >
                          publicar
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-row>
              </v-container>
            </v-col>
            <v-col cols="12" md="9">
              <v-card-title>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-title>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row justify="center">
            <v-subheader class="mt-4">El dia de hoy</v-subheader>
            <v-expansion-panels popout class="pb-4">
              <v-expansion-panel
                v-for="(message, i) in messages"
                :key="i"
                hide-actions
              >
                <v-expansion-panel-header>
                  <v-row align="center" class="spacer" no-gutters>
                    <v-col cols="4" sm="2" md="1">
                      <v-avatar size="36px">
                        <img
                          v-if="message.avatar"
                          alt="Avatar"
                          src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                        />
                        <v-icon
                          v-else
                          :color="message.color"
                          v-text="message.icon"
                        ></v-icon>
                      </v-avatar>
                    </v-col>
                    <v-col class="hidden-xs-only" sm="5" md="3">
                      <strong v-html="message.name"></strong>
                    </v-col>

                    <v-col class="text-no-wrap" cols="5" sm="3">
                      <v-chip
                        v-if="message.new"
                        :color="`${message.color} lighten-4`"
                        class="ml-0 mr-2 black--text"
                        label
                        small
                      >
                        {{ message.new }} new
                      </v-chip>
                      <strong v-html="message.title"></strong>
                    </v-col>
                    <v-col class="d-flex justify-end">
                      <v-col md="2" class="d-flex justify-end">
                        <v-icon> mdi-eye </v-icon>
                        <span class="grey--text d-flex align-center">
                          &nbsp;{{ message.total }}
                        </span>
                      </v-col>
                      <v-col md="2" class="d-flex justify-end">
                        <v-icon> mdi-comment </v-icon>
                        <span class="grey--text d-flex align-center">
                          &nbsp;{{ message.total }}
                        </span>
                      </v-col>
                    </v-col>
                  </v-row>
                </v-expansion-panel-header>

                <v-expansion-panel-content>
                  <v-divider></v-divider>
                  <v-card-text v-text="lorem" class="pb-0"></v-card-text>
                  <div class="text-end mt-12">
                    <v-rating
                      v-model="rating"
                      color="primary darken-3"
                      background-color="grey darken-1"
                      half-increments
                      hover
                      large
                    ></v-rating>
                  </div>
                  <v-divider></v-divider>
                  <v-card-text>
                    <v-row>
                      <v-col cols="10" md="1" class="pa-2">
                        <v-avatar size="36px" class="ml-4">
                          <img
                            alt="Avatar"
                            src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                          />
                        </v-avatar>
                      </v-col>
                      <v-col cols="10" md="11" class="pa-2">
                        <span class="caption">"Usuario" responde: </span>
                        <v-card-text v-text="lorem"></v-card-text>
                      </v-col>
                    </v-row>
                  </v-card-text>
                  <v-divider class="mb-4"></v-divider>
                  <v-btn
                    class="blue lighten-5 d-flex justify-center align-center"
                    color="primary darken-2"
                    block
                    outlined
                    @click="modalComentario = true"
                  >
                    <v-icon left dark>mdi-comment-plus-outline</v-icon>
                    agregar comentario
                  </v-btn>
                  <v-dialog v-model="modalComentario" max-width="700px">
                    <v-card>
                      <v-card-title>
                        <span class="text-h5"
                          >Nuevo comentario</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12" sm="6" md="12">
                              <v-textarea label="Descripción"></v-textarea>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="primary darken-1"
                          text
                          @click="modalComentario = false"
                        >
                          Cerrar
                        </v-btn>
                        <v-btn
                          color="primary darken-1"
                          text
                          @click="modalComentario = false"
                        >
                          Comentar
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-row>
        </v-container>
      </v-card>
    </v-app>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    search: "",
    modalDiscusion: false,
    modalComentario: false,
    rating: 4.5,
    vista: "De todos los temas",
    messages: [
      {
        avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
        name: "John Leider",
        title: "Welcome to Vuetify!",
        total: 3,
        excerpt: "Thank you for joining our community...",
      },
      {
        color: "red",
        icon: "mdi-account-multiple",
        name: "Social",
        new: 1,
        total: 3,
        title: "Twitter",
      },
      {
        color: "teal",
        icon: "mdi-tag",
        name: "Promos",
        new: 2,
        total: 4,
        title: "Shop your way",
        exceprt: "New deals available, Join Today",
      },
    ],
    lorem:
      "Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu.",
  }),
};
</script>


<style>
.v-sheet--offset {
  top: -14px;
  position: relative;
}

.contenido {
  max-width: 1450px;
}
</style>