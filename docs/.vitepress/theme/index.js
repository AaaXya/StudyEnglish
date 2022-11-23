import MyTheme from 'vitepress/theme';
import './color.css';
import href from './href.vue';

export default {
    ...MyTheme,
    enhanceApp(ctx) {
        MyTheme.enhanceApp(ctx);
        ctx.app.component('Hf', href);
    },
};
