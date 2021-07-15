import { gql } from '@apollo/client';

// 4 export
// export conts LOGIN_USER = gql `
// addUser, savebook and remove book

export const LOGIN_USER = gql` 
  mutation login($email: String!, $password: String!) {
  execute mutation 
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
      
    }
  }
}
`;
