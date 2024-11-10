import { shallowMount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

import IndexView from '../IndexView.vue'

describe('IndexView', () => {
  const wrapper = shallowMount(IndexView)

  test('it renders the hero section', () => {
    expect(wrapper.findAll('hero-section-stub')).toHaveLength(1)
  })
})
