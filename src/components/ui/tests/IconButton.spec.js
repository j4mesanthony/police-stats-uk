import { describe, it, expect } from 'vitest';
import IconButton from '../IconButton.vue';
import { createApp } from 'vue';
import { renderToString } from '@vue/server-renderer';

describe('IconButton', () => {
    it('should not regress (snapshot test)', async () => {
        const app = createApp(IconButton);
        const string = await renderToString(app);
        expect(string).toMatchSnapshot();
    })
})