import { mount } from '@vue/test-utils';
import UserList from '@/components/UserList.vue';

describe('User List component unit tests: ', () => {
	it('renders props when passed', () => {
		const message = 'new message';
		const wrapper = mount(UserList, {
			props: { message },
		});
		expect(wrapper.text()).toMatch(message);
	});

	test('Renders the list', () => {
		const wrapper = mount(UserList);
		const name = 'Anna Strong';
		const user = wrapper.get('[data-user="user"]');
		expect(user.text()).toContain(name);
		expect(wrapper.findAll('[data-user="user"]')).toHaveLength(2);
	});

	test('creates a user', async () => {
		const wrapper = mount(UserList);
		const newName = 'John Doe';
		await wrapper.get('[id="new-user"]').setValue(newName);
		await wrapper.get('[id="form"]').trigger('submit');
		expect(wrapper.findAll('[data-user="user"]')).toHaveLength(3);
	});
});
