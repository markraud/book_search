import { gql } from '@apollo/client';

// 4 export
// export conts LOGIN_USER = gql `
// addUser, savebook and remove book

export const LOGIN_USER = gql` 
  mutation login($email: String!, $password: String!) {
  # execute mutation 
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
      
    }
  }
}
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// export const SAVE_BOOK = gql`
//   mutation saveBook($bookData: BookInput!)
//     saveBook(bookData: $bookData) {
//       _id
//       username
//       email
//       savedBooks {
//         authors
//         description
//         bookId
//         image
//         link
//         title
//       }
//     }
//   `;

// export const REMOVE_BOOK = gql`
//   mutation removeBook($bookId: ID!) {
//     _id
//       username
//       email
//       bookCount
//       savedBooks {
//         authors
//         description
//         bookId
//         image
//         link
//         title
//       }
//   }

// `;