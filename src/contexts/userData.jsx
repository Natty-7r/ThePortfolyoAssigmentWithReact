import { createContext, useCallback, useReducer } from "react";

// Create Context
const UserDataContext = createContext();

// Type
const type = {
  USER_DATA: "USER_DATA",
};
const { USER_DATA } = type;

// Initial Value
const initialState = {
  userData: null,
};

// Reducer
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_DATA:
      return {
        ...state,
        userData: payload,
      };
    default:
      return state;
  }
};

// Watson State
const UserDataState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setUserData = useCallback((userData) => {
    dispatch({
      type: USER_DATA,
      payload: userData,
    });
  }, []);

  const { userData } = state;
  return (
    <UserDataContext.Provider
      value={{
        _id: userData?._id,
        email: userData?.email,
        role: userData?.role,
        refreshToken: userData?.refreshToken,
        about: userData?.about,
        services: userData?.services,
        projects: userData?.projects,
        username: userData?.username,
        skills: userData?.skills,
        timeline: userData?.timeline,
        youtube: userData?.youtube,
        social_handles: userData?.social_handles,
        testimonials: userData?.testimonials,
        setUserData,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataState;
export { UserDataContext };
