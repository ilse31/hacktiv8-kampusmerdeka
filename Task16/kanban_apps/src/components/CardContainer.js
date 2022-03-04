import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addCard, deleteCard, editCard } from "../store/actions";
import KanbanCard from "./KanbanCard";
import EditCardModal from "./EditCardModal";

import "../styles/CardContainer.css";
import "../styles/BoardContainer.css";

class CardContainer extends PureComponent {
  static propTypes = {
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        boardId: PropTypes.string,
        cardDueDate: PropTypes.string,
        cardId: PropTypes.string,
        cardName: PropTypes.string,
      })
    ).isRequired,
    boardId: PropTypes.string.isRequired,
    addCard: PropTypes.func.isRequired,
    deleteCard: PropTypes.func.isRequired,
    editCard: PropTypes.func.isRequired,
  };

  state = {
    show: false,
    cardId: "",
    editCardNameInput: "",
    editCardDueDateInput: "",
    addNewCardMode: false,
  };

  handleAddCard = () => {
    const { addCard, boardId } = this.props;
    const { cardId, editCardNameInput, editCardDueDateInput } = this.state;

    if (!editCardNameInput) {
      return;
    }

    addCard(
      {
        cardId,
        cardName: editCardNameInput,
        cardDueDate: editCardDueDateInput,
      },
      boardId
    );

    this.closeModal();
  };

  handleNameChange = (event) => {
    this.setState({ editCardNameInput: event.target.value });
  };

  handleDueDateChange = (event) => {
    this.setState({ editCardDueDateInput: event.target.value });
  };

  handleDeleteCard = () => {
    const { boardId, deleteCard } = this.props;

    deleteCard(this.state.cardId, boardId);

    this.closeModal();
  };

  handleEditCard = () => {
    const { boardId, cards, editCard } = this.props;
    const { cardId, editCardNameInput, editCardDueDateInput } = this.state;

    if (!editCardNameInput) {
      return;
    }

    const editedCard = cards.find((card) => card.cardId === cardId);
    if (
      editedCard &&
      (editedCard.cardName !== editCardNameInput ||
        editedCard.cardDueDate !== editCardDueDateInput)
    ) {
      editCard(
        {
          cardId,
          cardName: editCardNameInput,
          cardDueDate: editCardDueDateInput,
        },
        boardId
      );
    }

    this.closeModal();
  };

  closeModal = () => {
    this.setState({ show: false });
  };

  render() {
    const {
      cards,
      boardIndex,
      getClassName,
      handleDragEnter,
      handleDragStart,
      handleDrop,
      isDragging,
    } = this.props;

    return (
      <div className='card-container'>
        {cards.map(({ cardId, cardName, cardDueDate }, index) => (
          <KanbanCard
            className={
              isDragging ? getClassName(boardIndex, index) : "kanban-card"
            }
            key={cardId}
            text={cardName}
            handleDragStart={(event) =>
              handleDragStart(event, boardIndex, index)
            }
            handleDragEnter={
              isDragging
                ? (event) => handleDragEnter(event, boardIndex, index)
                : null
            }
            handleDrop={handleDrop}
            handleClick={() =>
              this.setState({
                show: true,
                cardId: cardId,
                editCardNameInput: cardName,
                editCardDueDateInput: cardDueDate,
                addNewCardMode: false,
              })
            }
          />
        ))}
        <KanbanCard
          text='+ Todo'
          className='kanban-card'
          handleDragEnter={
            isDragging
              ? (event) => {
                  cards.length === 0
                    ? handleDragEnter(event, boardIndex, 0)
                    : handleDragEnter(event, boardIndex, cards.length);
                }
              : null
          }
          handleDrop={handleDrop}
          handleClick={() =>
            this.setState({
              show: true,
              cardId: "",
              editCardNameInput: "",
              editCardDueDateInput: "",
              addNewCardMode: true,
            })
          }
        />

        <EditCardModal
          {...this.state}
          onDueDateChange={this.handleDueDateChange}
          onNameChange={this.handleNameChange}
          onDelete={this.handleDeleteCard}
          onHide={this.closeModal}
          onSave={
            this.state.addNewCardMode ? this.handleAddCard : this.handleEditCard
          }
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  addCard,
  deleteCard,
  editCard,
};

export default connect(null, mapDispatchToProps)(CardContainer);
