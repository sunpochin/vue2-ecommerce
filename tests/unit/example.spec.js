import { shallowMount } from '@vue/test-utils'
import HeaderPart from '@/components/HeaderPart.vue';

describe('HeaderPart.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Fashion Shop';
    const wrapper = shallowMount(HeaderPart, {
			props: { msg },
		});
    expect(wrapper.text()).toMatch(msg)
  })
})
