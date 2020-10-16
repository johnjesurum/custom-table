import React, {useState} from "react";
import {EditButton, ErrorMessage, Form, FormGroup, Input, Label, TextRight} from "./EditCharacterForm.styles";
import {useDispatch} from "react-redux";
import {Character} from "../../../Models/Character";
import {TableActions} from "../../../Store/Table/Slice";

type Props = {
  toggle: () => void;
  selectedCharacter: Character | undefined;
}

const EditCharacterForm: React.FC<Props> = ({toggle, selectedCharacter}) => {

  // const {selectedElement,pages} = useSelector((state: RootState) => state.tableReducer);

  const dispatch = useDispatch();

  const [characterForm, setCharacterForm] = useState<Character | any>(selectedCharacter);

  const [errorMessage, setErrorMessage] = useState(false);


  const handleSelect = (value: string, type: string) => {
    setErrorMessage(false);
    setCharacterForm((prevState:Character) => ({...prevState, [type]: value}));
  };

  const handleSubmit = () => {
    if (!characterForm?.name) {
      return setErrorMessage(true);
    }
    dispatch(TableActions.editCharacter(characterForm));
    toggle();
  };

  return (
    <div>
      <Form>
        <FormGroup>
          <Label>Name</Label>
          <Input value={characterForm?.name}
                 onChange={(e) => handleSelect(e.target.value, 'name')}
                 type='text'/>
        </FormGroup>

        <FormGroup>
          <Label>Status</Label>
          <Input value={characterForm?.status}
                 onChange={(e) => handleSelect(e.target.value, 'status')}
                 type='text'/>
        </FormGroup>

        <FormGroup>
          <Label>Species</Label>
          <Input value={characterForm?.species}
                 onChange={(e) => handleSelect(e.target.value, 'species')}
                 type='text'/>
        </FormGroup>

        <FormGroup>
          <Label>Gender</Label>
          <Input value={characterForm?.gender}
                 onChange={(e) => handleSelect(e.target.value, 'gender')}
                 type='text'/>
        </FormGroup>
      </Form>

      {
        errorMessage &&
        <ErrorMessage>
          Name cannot be empty
        </ErrorMessage>
      }

      <TextRight>
        <EditButton onClick={toggle}>
          Close
        </EditButton>
        {' '}
        <EditButton onClick={handleSubmit}>
          Edit
        </EditButton>
      </TextRight>

    </div>
  );
};

export default EditCharacterForm;
