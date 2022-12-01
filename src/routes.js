import { createRouter, createWebHashHistory } from 'vue-router'

/****Catalogos******************************************************************************************/
import Login from "./modulos/auth/Layouts/LoginGanadero.vue"

import isAuthenticatedGuard from '../modules/auth/router/auth-guard'

import authRouter from '../modules/auth/router'

export const routes = [
    /****Catalogos******************************************************************************************/
    {
        path: "/",
        component: Login,
    },
    {
        path: "/engorda",
        name: "engorda",
        beforeEnter: [ isAuthenticatedGuard ],
        component: () => import( /*webpackChuckName: "EngordaLayout"*/ "./modulos/Empaque/layouts/EngordaJc.vue"),
        children: [{
                path: "home",
                name: "home",
                component: () => import( /*webpackChuckName: "cuentas"*/ "./modulos/Empaque/layouts/Home-Alm.vue")
            },
        ]
    },
    {
        path: "/panelAdmin",
        name: "panelAdmin",
        beforeEnter: [ isAuthenticatedGuard ],
        component: () => import( /*webpackChuckName: "EngordaLayout"*/ "./modulos/PanelAdmin/PanelAdmin.vue"),
            children: [
            {
                path: "panelControl",
                name: "panelControl",
                component: () => import( /*webpackChuckName: "cuentas"*/ "./modulos/PanelAdmin/PanelAdmiHijo.vue")
            },
        ]
    },
    {
        path: '/auth',
        ...authRouter,
    },
]