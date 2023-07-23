import { gql, useQuery, useReactiveVar } from "@apollo/client";
import { isLoggedInVar, logUserOut } from "../apollo";
import { useEffect } from "react";

const ME_QUERY = gql`
  query me {
    me {
      avatar
      userName
    }
  }
`;

function useUser() {
  const loggedInUser = useReactiveVar(isLoggedInVar);
  const { data } = useQuery(ME_QUERY, {
    skip: !loggedInUser,
  });
  useEffect(() => {
    if (data?.me === null) {
      logUserOut();
    }
  }, [data]);
  return data;
}

export default useUser;
