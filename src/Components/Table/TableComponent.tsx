import React, {ChangeEvent} from "react";
import {Checkbox, Table, Th} from "../Shared/StyledElements";
import {Character} from "../../Models/Character";
import TableRowComponent from "../TableRowComponent";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Store/Reducers";
import {TableActions} from "../../Store/Table/Slice";

const TableComponent = () => {

  const dispatch = useDispatch();

  const {currentPage, pages} = useSelector((state: RootState) => state.tableReducer);

  const handleChecked = (checked: boolean, character: Character) => {
    dispatch(TableActions.handleChecked({checked, character}));
  };

  const checkAll = (isChecked:boolean) => {
    dispatch(TableActions.checkAll(isChecked));
  };


  return(
    <Table>
      <thead>
      <tr>
        <Th>
          <Checkbox
            onChange={(e:ChangeEvent<HTMLInputElement>)=>checkAll(e.target.checked)}
            type="checkbox"/>
        </Th>
        <Th>Name</Th>
        <Th>Status</Th>
        <Th>Species</Th>
        <Th>Gender</Th>
      </tr>
      </thead>
      <tbody>

      {
        pages[currentPage]?.map((character: Character, index: number) => {
          return (
            <TableRowComponent key={index + "-123"}
                               character={character}
                               handleChecked={handleChecked}/>
          )
        })
      }

      </tbody>
    </Table>
  );
};

export default TableComponent;
