const Vue = require('vue');
const Router = require('vue-router');
const Debug = require('./components/Debug');

Vue.use(Router);

module.exports = function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
        { path: '/debug', component: Debug  },
    ]
  })
}