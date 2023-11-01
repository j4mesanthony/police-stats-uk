import { describe, it, expect } from 'vitest';
import DataTable from '../DataTable.vue';
import { createApp } from 'vue';
import { renderToString } from '@vue/server-renderer';

describe('DataTable', () => {
    it('should not regress (snapshot test)', async () => {
        const app = createApp(DataTable);
        const string = await renderToString(app);
        expect(string).toMatchSnapshot();
    })
})