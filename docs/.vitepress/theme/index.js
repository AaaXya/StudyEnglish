import MyTheme from 'vitepress/theme'
import './color.css'
import href from './href.vue'
import audioplay from './asplay.vue'

export default {
    ...MyTheme,
    enhanceApp(ctx) {
        MyTheme.enhanceApp(ctx)
        ctx.app.component('Hf', href)
        ctx.app.component('Aplay', audioplay)
    },
}
