import { useState } from "react"

export const useFocus = () => {

    const [focused, setFocused] = useState<boolean>(false)

    const handleBlur = () => {
        setFocused(false)
    }

    const handleFocus = () => {
        setFocused(true)
    }

    return { focused, handleBlur, handleFocus }
}