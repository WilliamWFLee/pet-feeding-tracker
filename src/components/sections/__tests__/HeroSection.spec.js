import { shallowMount } from '@vue/test-utils'
import { describe, it } from 'vitest'

import { expect } from 'vitest'
import HeroSection from '../HeroSection.vue'

describe('HeroSection', () => {
  const wrapper = shallowMount(HeroSection)

  it('renders a section element', () => {
    expect(wrapper.findAll('section')).toHaveLength(1)
  })

  it('renders the index heading', () => {
    expect(wrapper.findAll('index-heading-stub')).toHaveLength(1)
  })

  it('renders the index tagline', () => {
    expect(wrapper.findAll('index-tagline-stub')).toHaveLength(1)
  })
})
