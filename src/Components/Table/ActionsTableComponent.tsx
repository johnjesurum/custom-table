import React, {useCallback, useEffect, useState} from "react";
import {Button, ButtonContainer, NavigatorButton} from "../Shared/StyledElements";
import {TableActions} from "../../Store/Table/Slice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Store/Reducers";
import Modal from "../Shared/Modal/Modal";
import EditCharacterForm from "../Shared/EditCharacterForm/EditCharacterForm";

const ActionsTableComponent = () => {

  const dispatch = useDispatch();

  const {currentPage, totalPages, selectedElement} = useSelector((state: RootState) => state.tableReducer);

  const changePage = useCallback((page: number) => {
    dispatch(TableActions.getList({currentPage: page}))
  }, [dispatch]);

  useEffect(() => {
    changePage(1);
  }, [changePage]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal =() => setIsModalOpen(prevState => !prevState);


  return(
    <ButtonContainer>

      <div>
        <Button primary disabled={!selectedElement.length}>Delete</Button>
        <Button  onClick={toggleModal} disabled={selectedElement.length !== 1}>Edit</Button>
      </div>

      <div>
        <NavigatorButton disabled={currentPage === 1} onClick={() => changePage(currentPage - 1)}>
          &lt;
        </NavigatorButton>

        <NavigatorButton disabled={currentPage === totalPages} onClick={() => changePage(currentPage + 1)}>
          &gt;
        </NavigatorButton>
      </div>

      {isModalOpen && <Modal children={<EditCharacterForm toggle={toggleModal} />} toggle={toggleModal}/>}

    </ButtonContainer>
  );
};

export default ActionsTableComponent;
