<template>
  <v-app class="colorDegradado">
    <!-- <v-container class="d-flex justify-center mt-12"> -->
    <v-card
      elevation="15"
      class="d-flex justify-center mx-auto my-auto rounded-xl"
      width="95%"
      height="90%"
    >
      <v-row class="pa-0 ma-0">
        <v-col
          cols="12"
          md="8"
          class="
            pa-0
            ma-0
            d-none d-md-flex
            justify-start
            align-end
            primary
            rounded-l-xl
          "
          width="100%"
          height="100%"
        >
          <v-row class="flex-column">
            <v-col class="d-flex justify-center">
              <v-img max-height="300" max-width="300"></v-img>
            </v-col>
            <v-col>
              <v-img
                max-height="300"
                max-width="300"
                class="rota-horizontal rounded-br-xl"
              ></v-img>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="4" xs="12" class="pa-0 ma-0">
          <v-card
            width="100%"
            height="100%"
            class="
              grey
              darken-3
              elevation-20
              rounded-l-0 rounded-r-xl
              d-flex
              align-center
            "
          >
            <v-container class="mx-10 mb-16">
              <v-row class="flex-column">
                <v-col
                  cols="12"
                  md="12"
                  sm="12"
                  class="d-flex justify-center mb-0 pb-0"
                >
                  <v-avatar color="primary" size="72">
                    <v-icon dark size="62"> mdi-account-circle </v-icon>
                  </v-avatar>
                </v-col>
                <v-col
                  cols="12"
                  md="12"
                  sm="12"
                  class="d-flex justify-center mt-0 pt-0"
                >
                  <v-divider class="my-auto mr-3"></v-divider>
                  <h1 class="d-flex justify-center align-center white--text">
                    Bienvenido
                  </h1>
                  <v-divider class="my-auto ml-3"></v-divider>
                </v-col>
                <v-col cols="12" md="12" sm="12" class="my-2">
                  <v-text-field
                    append-icon="mdi-badge-account-horizontal-outline"
                    label="Usuario"
                    required
                    class="white px-6 rounded-pill"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="12" sm="12" class="mt-2">
                  <v-text-field
                    append-icon="mdi-shield-lock-outline"
                    label="Contraseña"
                    required
                    class="white px-6 rounded-pill"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="12" sm="12">
                  <v-container class="d-flex justify-center">
                    <router-link
                      to="/engorda/home"
                      exact
                      class="white--text text-decoration-none"
                    >
                      <v-btn
                        color="primary white--text my-2 rounded-pill"
                        @click="enter()"
                        >Entrar</v-btn
                      >
                    </router-link>
                  </v-container>
                  <a
                    class="
                      caption
                      white--text
                      text-decoration-none
                      d-flex
                      justify-center
                      ma-0
                      pa-0
                    "
                    >¿Perdiste tu contraseña?</a
                  >
                  <a
                    @click="modalRegistrar = true"
                    class="
                      caption
                      white--text
                      text-decoration-none
                      d-flex
                      justify-center
                      ma-0
                      pa-0
                    "
                    >¿No tienes una cuenta? Regístrate</a
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-card>
          <!-- Modal Registro -->
          <v-dialog v-model="modalRegistrar" max-width="600px">
            <v-card>
              <v-card-title>
                <span class="text-h5">¡Regístrate!</span>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field 
                        filled
                        label="Nombre(s)"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field 
                        filled
                        label="Apellidos"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field 
                        filled label="Email" required></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field 
                        filled label="Numero de teléfono" required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field 
                        filled
                        label="Contraseña"
                        type="password"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-select
                        :items="['0-17', '18-29', '30-54', '54+']"
                        label="Edad"
                        required
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-autocomplete
                        :items="[
                          'Hombre',
                          'Mujer',
                          'Otro',
                        ]"
                        label="Sexo"
                      ></v-autocomplete>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" tile plain @click="modalRegistrar = false">
                  Cerrar
                </v-btn>
                <v-btn color="blue darken-1" tile plain @click="modalRegistrar = false">
                  Registrarse
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <!-- Modal Registro -->
        </v-col>
      </v-row>
    </v-card>
  </v-app>
</template>

<script>
import Swal from "sweetalert2";
export default {
  data: () => ({
    usuario: "Eros Leon",
    modalRegistrar: false,
  }),
  methods: {
    enter() {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: "success",
        title: "Bienvenido " + this.usuario,
      });
    },
  },
};
</script>

<style scoped>
.contenido {
  max-width: 1600px;
}
.colorDegradado {
  background: rgba(39, 39, 39, 1) !important;
}
.rota-horizontal {
  transform: scaleX(-1);
}
</style>