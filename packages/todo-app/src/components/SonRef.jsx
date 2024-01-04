import { forwardRef, useRef, useImperativeHandle } from 'react'

const SonRef = forwardRef(function (props, ref) {
  const inputRef = useRef(null)
  useImperativeHandle(ref, () => {
    return {
      focusHandler() {
        inputRef.current.focus()
      }
    }
  })
  return <input ref={inputRef} />
})
export default SonRef
