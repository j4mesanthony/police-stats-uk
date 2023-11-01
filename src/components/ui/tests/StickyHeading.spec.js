import { describe, it, expect } from 'vitest';
import StickyHeading from '../StickyHeading.vue';
import { createApp } from 'vue';
import { renderToString } from '@vue/server-renderer';

describe('StickyHeading', () => {
    it('should not regress (snapshot test)', async () => {
        const app = createApp(StickyHeading);
        const string = await renderToString(app);
        expect(string).toMatchSnapshot();
    })
})