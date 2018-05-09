const Vue = require('vue');
const createRouter = require('./router');
const App = require('./components/App');

module.exports = function createApp (context) {
    return new Promise((resolve, reject) => {
        const router = createRouter();
        const app = new Vue({
            router,
            render: h => h(App),
        });
        router.push(context.url);
        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents();
            if (!matchedComponents.length) {
              return reject({ code: 404 });
            }

            resolve(app);
        }, reject);
    });
}