
import Vue, {DefineComponent} from 'vue';

declare module '*.vue' {
    import { defineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>
    export default component;
}

// ComponentOptions объявляется в types/options.d.ts
// declare module 'vue/types/options' {
//     interface ComponentOptions<V extends Vue.ComponentOptions> {
//         title?: string
//     }
// }