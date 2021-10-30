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

interface AnimalLike{
  eat(food): void
}

class Dog implements AnimalLike{
  bark(){
    return 'arf'
  }
}
/*
  Dog will return error...
  Class 'Dog' incorrectly implements interface 'AnimalLike'.
  Property 'eat' is missing in type 'Dog' but required in type 'AnimalLike'.
*/