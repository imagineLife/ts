import { UserContactInfo, UserInfoRes, UserErr, UserSuccess } from './types';

export default function showContactInfo(info: UserContactInfo){
  console.log(info)
  console.log(info.email)
};

export function showConditionalUserInfo(): UserInfoRes {
  if(Math.random() > .5) return ['success',{name: 'qwer', email: 'asdf'}]
  return ['error', new Error('problem')]
}