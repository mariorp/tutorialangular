
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
    'index.csr.html': {size: 744, hash: 'b66df3ae902b0b987877b6bb90e19d35dd039b9b39f88177840d6454d51f5fcd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1041, hash: '0c492f3f4b404b0f0240f2a1da22ece8ed5957509871228a8e186e60d4015a55', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'instalacion/index.html': {size: 15384, hash: '001a249b18d46b30ec6090249a451cdd4882e0b67257a8a749dde474a645e81c', text: () => import('./assets-chunks/instalacion_index_html.mjs').then(m => m.default)},
    'explicacion/index.html': {size: 15384, hash: '001a249b18d46b30ec6090249a451cdd4882e0b67257a8a749dde474a645e81c', text: () => import('./assets-chunks/explicacion_index_html.mjs').then(m => m.default)},
    'conclusiones/index.html': {size: 15384, hash: '001a249b18d46b30ec6090249a451cdd4882e0b67257a8a749dde474a645e81c', text: () => import('./assets-chunks/conclusiones_index_html.mjs').then(m => m.default)},
    'primeros-pasos/index.html': {size: 15384, hash: '001a249b18d46b30ec6090249a451cdd4882e0b67257a8a749dde474a645e81c', text: () => import('./assets-chunks/primeros-pasos_index_html.mjs').then(m => m.default)},
    'utilizacion/index.html': {size: 15384, hash: '001a249b18d46b30ec6090249a451cdd4882e0b67257a8a749dde474a645e81c', text: () => import('./assets-chunks/utilizacion_index_html.mjs').then(m => m.default)},
    'justificacion/index.html': {size: 15384, hash: '001a249b18d46b30ec6090249a451cdd4882e0b67257a8a749dde474a645e81c', text: () => import('./assets-chunks/justificacion_index_html.mjs').then(m => m.default)},
    'styles-4AD6OD7P.css': {size: 3874, hash: 'zSIDR8YHark', text: () => import('./assets-chunks/styles-4AD6OD7P_css.mjs').then(m => m.default)}
  },
};
