import UIState from "../../contexts/UI";
import UserDataState from "../../contexts/userData";

const ContextProvider = ({ children }) => {
  return (
    <UIState>
      <UserDataState>{children}</UserDataState>
    </UIState>
  );
};

export default ContextProvider;
