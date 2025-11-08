import { createContext } from "react";

const AppContext = createContext({
  estado: {},
  dispatch: () => {},
});

export default AppContext;
