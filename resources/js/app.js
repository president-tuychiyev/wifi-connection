import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import { NConfigProvider, NMessageProvider } from 'naive-ui';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Wifi';
const theme = {
    "common": {
        "borderRadius": "6px",
        "borderRadiusSmall": "4px",
        "primaryColor": "#2563ebFF",
        "primaryColorHover": "#3b82f6FF",
        "primaryColorPressed": "#1d4ed8FF",
        "primaryColorSuppl": "#2563ebFF",
        "infoColor": "#0ea5e9FF",
        "infoColorHover": "#38bdf8FF",
        "infoColorPressed": "#0284c7FF",
        "infoColorSuppl": "#0ea5e9FF",
        "successColor": "#10b981FF",
        "successColorHover": "#34d399FF",
        "successColorPressed": "#059669FF",
        "successColorSuppl": "#10b981FF",
        "warningColor": "#f59e0bFF",
        "warningColorHover": "#fbbf24FF",
        "warningColorPressed": "#d97706FF",
        "warningColorSuppl": "#f59e0bFF",
        "errorColor": "#dc2626FF",
        "errorColorHover": "#ef4444FF",
        "errorColorPressed": "#b91c1cFF",
        "errorColorSuppl": "#dc2626FF",
        "textColorBase": "#0f172aFF",
        "textColor1": "#0f172aFF",
        "textColor2": "#111827FF",
        "textColor3": "#475569FF",
        "textColorDisabled": "#cbd5e1FF",
        "placeholderColor": "#94a3b8FF",
        "placeholderColorDisabled": "#cbd5e1FF",
        "iconColor": "#64748bFF",
        "iconColorHover": "#94a3b8FF",
        "iconColorPressed": "#475569FF",
        "iconColorDisabled": "#cbd5e1FF",
        "dividerColor": "#cbd5e1FF",
        "borderColor": "#cbd5e1",
        "closeIconColor": "#334155FF",
        "closeIconColorHover": "#475569FF",
        "closeIconColorPressed": "#1e293bFF",
        "closeColorHover": "#64748B25",
        "closeColorPressed": "#0000001A",
        "clearColor": "#94a3b8FF",
        "clearColorHover": "#64748bFF",
        "clearColorPressed": "#475569FF",
        "scrollbarColor": "#64748B52",
        "scrollbarColorHover": "#1E293B5E",
        "tagColor": "#e2e8f0FF",
        "avatarColor": "#e2e8f0FF",
        "invertedColor": "#0f172aFF"
    }
}

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp(
            {
                render: () => h(NConfigProvider, { themeOverrides: theme },
                    () => h(NMessageProvider, { placement: "top" },
                        () => h(App, props))
                )
            }
        )
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .mount(el);
    },
    progress: {
        color: '#8338ec',
    },
});
