import { shallowMount } from '@vue/test-utils';
import VUserSearchForm from '@/components/VUserSearchForm';

describe('VUSearchForm', () => {
    const build = () => {
        const wrapper = shallowMount(VUserSearchForm);

        return {
            wrapper,
            input: () => wrapper.find('input'),
            button: () => wrapper.find('button'),
        }
    }

    it('renders the component', () => {
        const { input, button } = build();

        expect(input().exists()).toBe(true);
        expect(button().exists()).toBe(true);
    });

    it('calls "submitted" event when submitting form', () => {
        const expectedUser = 'kuroski';

        const { wrapper, input, button } = build();

        input().element.value = expectedUser;

        input().trigger('input')
        button().trigger('click')
        button().trigger('submit')

        expect(wrapper.emitted().submitted[0]).toEqual([expectedUser]);
    });
});
