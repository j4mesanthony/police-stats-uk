import { describe, it, expect } from 'vitest';
import LinkItem from '../LinkItem.vue';
import { createApp } from 'vue';
import { renderToString } from '@vue/server-renderer';
import { mount } from '@vue/test-utils';

describe('LinkItem', () => { 
    it('should not regress (snapshot test)', async () => {
        const app = createApp(LinkItem);
        const string = await renderToString(app);
        expect(string).toMatchSnapshot();
    })

    it('should render a link item', () => {
        const wrapper = mount(LinkItem);
        const link = wrapper.get('[data-test="link"]');
        expect(link.text()).toContain('LinkItem');
    })

    it('should render a link item with user provided slot content', () => {
        const wrapper = mount(LinkItem, {
            slots: {
                default: 'My Link'
            }
        });

        const link = wrapper.get('[data-test="link"]');
        expect(link.text()).toContain('My Link');
    })

    it('should render a link item with user provided icon', () => {
        const wrapper = mount(LinkItem, {
            props: {
                icon: 'save'
            }
        });

        const icon = wrapper.get('[data-test="icon"]');
        expect(icon.text()).toContain('save');
    })
 })