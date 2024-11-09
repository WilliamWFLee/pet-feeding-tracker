import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

import SecondaryLinkButton from '../SecondaryLinkButton.vue'

describe('SecondaryLinkButton', () => {
  const wrapper = mount(SecondaryLinkButton, {
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

  test('it applies the classes .bg-rose-taupe.text-magnolia to the button', () => {
    expect(wrapper.attributes().class).toContain('bg-rose-taupe')
    expect(wrapper.attributes().class).toContain('text-magnolia')
  })
})
