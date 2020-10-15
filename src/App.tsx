import React, {useEffect} from "react";
import "./App.scss";
import {useDispatch, useSelector} from "react-redux";
import {TableActions} from "./Store/Table/Slice";
import {Table} from "reactstrap";
import {RootState} from "./Store/Reducers";
import {Character} from "./Models/Character";

const App = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(TableActions.getList());
  },[dispatch]);

  const {tableReducer:{list}} = useSelector((state: RootState) => state);


  return (
    <div className="App">
      <Table>
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Status</th>
          <th>Species</th>
          <th>Gender</th>
        </tr>
        </thead>
        <tbody>

        {
          list.map((character:Character)=>{
            return (
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
            )
          })
        }


        </tbody>
      </Table>
    </div>
  );
};

export default App;
