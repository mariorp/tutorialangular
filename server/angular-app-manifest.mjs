
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/tutorialangular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/tutorialangular/justificacion",
    "route": "/tutorialangular"
  },
  {
    "renderMode": 2,
    "route": "/tutorialangular/justificacion"
  },
  {
    "renderMode": 2,
    "route": "/tutorialangular/instalacion"
  },
  {
    "renderMode": 2,
    "route": "/tutorialangular/primeros-pasos"
  },
  {
    "renderMode": 2,
    "route": "/tutorialangular/utilizacion"
  },
  {
    "renderMode": 2,
    "route": "/tutorialangular/explicacion"
  },
  {
    "renderMode": 2,
    "route": "/tutorialangular/conclusiones"
  }
],
  assets: {
    'index.csr.html': {size: 744, hash: '36b924c8214bf8b589dc5665b10a8a1b9c66135f02e2d7fe870df7c914f9f250', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1041, hash: '67d0cca2ccc0cf4a9dfec990315ee3b1e08f0a1464ff40c0f402f0611920a197', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'instalacion/index.html': {size: 15290, hash: 'e3ae5011e481a7c9313dccad38dc1cc4a3a41f283433f30457c8e06e489a6fc3', text: () => import('./assets-chunks/instalacion_index_html.mjs').then(m => m.default)},
    'explicacion/index.html': {size: 15290, hash: 'e3ae5011e481a7c9313dccad38dc1cc4a3a41f283433f30457c8e06e489a6fc3', text: () => import('./assets-chunks/explicacion_index_html.mjs').then(m => m.default)},
    'primeros-pasos/index.html': {size: 15290, hash: 'e3ae5011e481a7c9313dccad38dc1cc4a3a41f283433f30457c8e06e489a6fc3', text: () => import('./assets-chunks/primeros-pasos_index_html.mjs').then(m => m.default)},
    'conclusiones/index.html': {size: 15290, hash: 'e3ae5011e481a7c9313dccad38dc1cc4a3a41f283433f30457c8e06e489a6fc3', text: () => import('./assets-chunks/conclusiones_index_html.mjs').then(m => m.default)},
    'utilizacion/index.html': {size: 15290, hash: 'e3ae5011e481a7c9313dccad38dc1cc4a3a41f283433f30457c8e06e489a6fc3', text: () => import('./assets-chunks/utilizacion_index_html.mjs').then(m => m.default)},
    'justificacion/index.html': {size: 15290, hash: 'e3ae5011e481a7c9313dccad38dc1cc4a3a41f283433f30457c8e06e489a6fc3', text: () => import('./assets-chunks/justificacion_index_html.mjs').then(m => m.default)},
    'styles-4AD6OD7P.css': {size: 3874, hash: 'zSIDR8YHark', text: () => import('./assets-chunks/styles-4AD6OD7P_css.mjs').then(m => m.default)}
  },
};
