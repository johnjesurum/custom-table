import React from "react";
import "./App.scss";
import ActionsTableComponent from "./Components/Table/ActionsTableComponent";
import TableComponent from "./Components/Table/TableComponent";
import {TableContainer} from "./Components/Shared/StyledElements";

const App = () => {
  return (
    <TableContainer>
      <TableComponent/>
      <ActionsTableComponent/>
    </TableContainer>
  );
};

export default App;
