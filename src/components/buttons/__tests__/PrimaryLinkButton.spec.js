import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

import PrimaryLinkButton from '../PrimaryLinkButton.vue'

describe('PrimaryLinkButton', () => {
  const wrapper = mount(PrimaryLinkButton, {
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

  test('it applies the classes .bg-cambridge-blue.text-night to the button', () => {
    expect(wrapper.attributes().class).toContain('bg-cambridge-blue')
    expect(wrapper.attributes().class).toContain('text-night')
  })
})
