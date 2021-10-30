import showContactInfo from './utils'
import { showConditionalUserInfo } from './utils';
showContactInfo({name: 'Joe', email: 'water'})

let userWithMore = {
  name: 'sally',
  email: 'melon',
  age: 23,
  job: 'worker'
}

showContactInfo(userWithMore)
showConditionalUserInfo()