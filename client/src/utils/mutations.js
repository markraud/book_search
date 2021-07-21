import { gql } from '@apollo/client';

// 4 export
// export conts LOGIN_USER = gql `
// addUser, savebook and remove book

export const LOGIN_USER = gql` 
  mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
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
        email
      }
    }
  }
`;


export const SAVE_BOOK = gql`
  mutation saveBook($bookData: BookInput!) {
    saveBook(bookData: $bookData) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        title
        authors
        description
        image
        link
      }
    }
  }
`;

// export const SAVE_BOOK = gql`
//   mutation saveBook($bookData: BookInput!) {
//     saveBook(bookData: $bookData) {
//       _id
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
//     }
//   }
//   `;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
    _id
    username
    savedBooks {
      bookId
      authors
      title
      description
      image
      link
      }
  }
}
`;