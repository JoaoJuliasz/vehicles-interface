import { describe, expect, it } from 'vitest'

import { renderHook, act } from '../../../test-utils'
import { useFocus } from './useFocus'

describe('useFocus', () => {
    it('should render the initial focus', () => {
        const { result } = renderHook(useFocus)
        expect(result.current.focused).toBe(false)
    })

    it('should set focus to be true', () => {
        const { result } = renderHook(useFocus)
        act(() => result.current.handleFocus())
        expect(result.current.focused).toBe(true)
    })
})