import React, {ChangeEvent} from "react";
import {Checkbox, Td} from "./Shared/StyledElements";
import {Character} from "../Models/Character";

type Props = {
  character:Character;
  handleChecked:(checked:boolean,character:Character)=>void;
};

const TableRowComponent : React.FC<Props> = ({character,handleChecked}) => {

  return(
    <tr>
      <Td>
          <Checkbox checked={!!character.selected}
                    type='checkbox'
                    onChange={(e:ChangeEvent<HTMLInputElement>)=>handleChecked(e.target.checked,character)}
          />
      </Td>
      <Td>{character?.name}</Td>
      <Td>{character?.status}</Td>
      <Td>{character?.species}</Td>
      <Td>{character?.gender}</Td>
    </tr>
  );
};

export default TableRowComponent;
