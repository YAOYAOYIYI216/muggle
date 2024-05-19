import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '../styles/index.scss'

library.add(fas)

export { default as Icon } from './Icon'
export { default as Button } from './Button'
export { default as Input } from './Input'
export { default as Progress } from './Progress'
export { default as Upload } from './Upload'
export { default as Form } from './Form'