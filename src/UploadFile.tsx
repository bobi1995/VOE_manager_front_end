import React, { useEffect } from "react";
import { useMutation, gql, useQuery } from "@apollo/client";

const UPLOAD_FILE = gql`
  mutation uploadAvatar($file: Upload, $userId: String) {
    uploadAvatar(file: $file, userId: $userId) {
      url
    }
  }
`;

const FETCH_USERS = gql`
  query Query {
    getAllUsers {
      _id
    }
  }
`;
export const UploadFile = () => {
  const [uploadFile, { data, loading, error }] = useMutation(UPLOAD_FILE);

  // const { loading, error, data } = useQuery(FETCH_USERS);

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    uploadFile({
      variables: {
        file,
        userId: "62cc167314745b2089b899d3",
      },
    });
  };

  return (
    <div>
      <h1>Upload file</h1>
      <input type="file" onChange={handleFileChange}></input>
    </div>
  );
};
