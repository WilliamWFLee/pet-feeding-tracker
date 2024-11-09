import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

import LinkButton from '../LinkButton.vue'

describe('LinkButton', () => {
  const wrapper = mount(LinkButton, {
    slots: {
      default: 'Button Text',
    },
    global: {
      mocks: {
        AppLink: {
          template: '<i></i>',
        },
      },
    },
  })

  test('it applies the classes .px-5.px-3.rounded-md to the button', () => {
    expect(wrapper.attributes().class).toContain('px-5')
    expect(wrapper.attributes().class).toContain('py-3')
    expect(wrapper.attributes().class).toContain('rounded-md')
  })
})
