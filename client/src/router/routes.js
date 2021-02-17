
const routes = [
  {
    path: '/index',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // Generales
      { path: '/inicio', component: () => import('pages/Home.vue') },
      // Administrador
      { path: '/banners_publicidad', component: () => import('pages/Admin/Banners.vue') },
      { path: '/perfil_proveedor/:id', component: () => import('pages/Proveedor/Perfil.vue') },
      // Proveedor
      { path: '/perfil_proveedor', component: () => import('pages/Proveedor/Perfil.vue') },
      { path: '/producto', component: () => import('pages/Proveedor/Producto.vue') },
      { path: '/productos', component: () => import('pages/Proveedor/ListaProductos.vue') }
    ]
  },
  { path: '/login', component: () => import('pages/Login.vue') },
  { path: '/registro', component: () => import('pages/Registro.vue') },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '*',
    redirect: '/login'
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
