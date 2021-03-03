
const routes = [
  {
    path: '/index',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // Generales
      { path: '/inicio', component: () => import('pages/Home.vue') },
      // Administrador
      { path: '/banners_publicidad', component: () => import('pages/Admin/Banners.vue') },
      { path: '/emprendedores', component: () => import('pages/Admin/Proveedores.vue') },
      { path: '/perfil_proveedor/:id', component: () => import('pages/Proveedor/Perfil.vue') },
      { path: '/proveedor/:proveedor_id', component: () => import('pages/Proveedor/ListaProductos.vue') },
      // Proveedor
      { path: '/perfil_proveedor', component: () => import('pages/Proveedor/Perfil.vue') },
      { path: '/index_app', component: () => import('pages/Proveedor/Index.vue') },
      { path: '/producto', component: () => import('pages/Proveedor/Producto.vue') },
      { path: '/producto/:id', component: () => import('pages/Proveedor/EditarProducto.vue') },
      { path: '/productos', component: () => import('pages/Proveedor/ListaProductos.vue') },
      // Cliente
      { path: '/tienda/:proveedor_id', component: () => import('pages/Cliente/Tienda.vue') },
      { path: '/tienda/:proveedor_id/:producto_id', component: () => import('pages/Cliente/Tienda.vue') },
      { path: '/payment_confirm', component: () => import('pages/Home.vue') },
      { path: '/result', component: () => import('pages/Login.vue') }
    ]
  },
  { path: '/login', component: () => import('pages/Login.vue') },
  { path: '/registro', component: () => import('pages/Registro.vue') },
  { path: '/splash', component: () => import('pages/Splash.vue') },
  {
    path: '/',
    redirect: '/splash'
  },
  {
    path: '*',
    redirect: '/splash'
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
