import { describe, it, expect } from 'vitest';
import LinkItem from '../LinkItem.vue';
import { createApp } from 'vue';
import { renderToString } from '@vue/server-renderer';

describe('LinkItem', () => { 
    it('should not regress (snapshot test)', async () => {
        const app = createApp(LinkItem);
        const string = await renderToString(app);
        expect(string).toMatchSnapshot();
    })
 })