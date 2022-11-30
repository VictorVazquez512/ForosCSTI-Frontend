<template>
    <v-container fluid class="contenido">
      <v-app>
        <h1 class="title d-inline">Listado de Usuarios</h1>
        <template>
          <v-card>
            <v-tabs>
              <v-tab> Usuarios </v-tab>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <v-divider class="mb-2"></v-divider>
                    <template>
                      <v-data-table
                        :headers="headers"
                        :items="segundaLista"
                        :search="search"
                        class="elevation-1"
                      >
                        <template v-slot:top>
                          <v-toolbar flat>
                            <v-toolbar-title
                              >Listado de {{ letter }}es</v-toolbar-title
                            >
                            <v-divider class="mx-4" inset vertical></v-divider>
                            <v-spacer></v-spacer>
                            <v-spacer></v-spacer>
                            <v-text-field
                              v-model="search"
                              append-icon="mdi-magnify"
                              label="Buscar"
                              single-line
                              hide-details
                            ></v-text-field>
                          </v-toolbar>
                          <v-divider></v-divider>
                        </template>
                        <template v-slot:[`item.activoInactivo`]="{ item }">
                          <v-simple-checkbox
                            v-model="item.activoInactivo"
                            disabled
                          ></v-simple-checkbox>
                        </template>
                        <template v-slot:[`item.actions`]="{ item }">
                          <v-icon small class="ml-2" @click="editItem(item)">
                            mdi-pencil
                          </v-icon>
                        </template>
                        <template v-slot:no-data>
                          <v-btn color="primary" @click="lista()">
                            Reintentar
                          </v-btn>
                        </template>
                      </v-data-table>
                    </template>
                    <!-- Fin empresas modal -->
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
          </v-card>
        </template>
      </v-app>
    </v-container>
  </template>
  
  <script>
  export default {
    data: () => ({

    })
  }
  </script>