/****Catalogos******************************************************************************************/
import Login from "./modulos/auth/Layouts/LoginGanadero.vue"

export const routes = [
    /****Catalogos******************************************************************************************/
    {
        path: "/",
        component: Login,
    },
    {
        path: "/engorda",
        name: "engorda",
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
        component: () => import( /*webpackChuckName: "EngordaLayout"*/ "./modulos/PanelAdmin/PanelAdmin.vue"),
        children: [{
            path: "panelControl",
            name: "panelControl",
            component: () => import( /*webpackChuckName: "cuentas"*/ "./modulos/PanelAdmin/PanelAdmiHijo.vue")
        },
    ]
    },
]