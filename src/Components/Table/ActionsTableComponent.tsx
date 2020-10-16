import React, {useCallback, useEffect, useState} from "react";
import {Button, ButtonContainer, NavigatorButton} from "../Shared/StyledElements";
import {TableActions} from "../../Store/Table/Slice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Store/Reducers";
import Modal from "../Shared/Modal/Modal";
import EditCharacterForm from "../Shared/EditCharacterForm/EditCharacterForm";
import {Character} from "../../Models/Character";

const ActionsTableComponent = () => {

  const dispatch = useDispatch();

  const {currentPage, totalPages, selectedElement,pages} = useSelector((state: RootState) => state.tableReducer);

  const changePage = useCallback((page: number) => {
    dispatch(TableActions.getList({currentPage: page}))
  }, [dispatch]);

  const handleDelete = () => {
    dispatch(TableActions.deleteSelectedCharacters());
  };

  useEffect(() => {
    changePage(1);
  }, [changePage]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal =() => setIsModalOpen(prevState => !prevState);

  const selectedCharacter: Character | undefined = Object.values(pages).flat().find((c:Character) => c.selected);

  return(
    <ButtonContainer>

      <div>
        <Button onClick={handleDelete} primary disabled={!selectedElement}>Delete</Button>
        <Button  onClick={toggleModal} disabled={selectedElement !== 1}>Edit</Button>
      </div>

      <div>
        <NavigatorButton disabled={currentPage === 1} onClick={() => changePage(currentPage - 1)}>
          &lt;
        </NavigatorButton>

        <NavigatorButton disabled={currentPage === totalPages} onClick={() => changePage(currentPage + 1)}>
          &gt;
        </NavigatorButton>
      </div>

      {isModalOpen && <Modal children={<EditCharacterForm selectedCharacter={selectedCharacter} toggle={toggleModal} />} toggle={toggleModal}/>}

    </ButtonContainer>
  );
};

export default ActionsTableComponent;
