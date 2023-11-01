import { describe, it, expect } from 'vitest';
import IconButton from '../IconButton.vue';
import { createApp } from 'vue';
import { renderToString } from '@vue/server-renderer';
import { mount } from '@vue/test-utils';

describe('IconButton', () => {
    it('should not regress (snapshot test)', async () => {
        const app = createApp(IconButton);
        const string = await renderToString(app);
        expect(string).toMatchSnapshot();
    })
    

    it('should render the icon passed in as prop', () => {
        const wrapper = mount(IconButton, {
            props: {
                icon: 'save'
            }
        });

        const icon = wrapper.get('[data-test="icon"]');

        expect(icon.text()).toContain('save');
    })
})