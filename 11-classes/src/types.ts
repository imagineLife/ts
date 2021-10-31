export type UserContactInfo = {
  name: string
  email: string
};

export type UserErr = ['error', Error];
export type UserSuccess = ['success', UserContactInfo];
export type UserInfoRes = | UserErr | UserSuccess; 