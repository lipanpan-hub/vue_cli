import Vue from "vue";
import App from "./App.vue";
// import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
import Vant from "vant";
import "vant/lib/index.css";

Vue.config.productionTip = false;
// 告诉vue 我们需要在项目当中使用 elementUI
// Vue.use(ElementUI);
Vue.use(Vant);

new Vue({
    render: (h) => h(App)
}).$mount("#app");
