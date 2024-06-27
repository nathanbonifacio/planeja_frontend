import React, { useState } from "react";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown
} from "react-icons/fa";
import { SaveIcon, CancelIcon, DeleteIcon, EditIcon } from "./styles";

const GridItem = ({ item, isEditing, onDelete, onEdit, onStartEdit, onCancelEdit }) => {
  const [editedItem, setEditedItem] = useState({ ...item });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedItem({
      ...editedItem,
      [name]: name === "expense" ? value === "true" : value
    });
  };

  const handleSave = () => {
    onEdit(editedItem);
  };

  const handleCancel = () => {
    onCancelEdit();
    setEditedItem({ ...item });
  };

  return (
    <C.Tr className={isEditing ? "editing" : ""}>
      <C.Td width={40}>
        {isEditing ? (
          <input
            type="text"
            name="desc"
            value={editedItem.desc}
            onChange={handleEditChange}
          />
        ) : (
          item.desc
        )}
      </C.Td>
      <C.Td width={40}>
        {isEditing ? (
          <input
            type="number"
            name="amount"
            value={editedItem.amount}
            onChange={handleEditChange}
          />
        ) : (
          item.amount
        )}
      </C.Td>
      <C.Td width={10} alignCenter>
        {isEditing ? (
          <select
            name="expense"
            value={editedItem.expense}
            onChange={handleEditChange}
          >
            <option value="false">Ganho</option>
            <option value="true">Despesa</option>
          </select>
        ) : item.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </C.Td>
      <C.Td width={10} alignCenter>
        {isEditing ? (
          <>
            <SaveIcon onClick={handleSave} />
            <CancelIcon onClick={handleCancel} />
          </>
        ) : (
          <>
            <EditIcon onClick={() => onStartEdit(item.id)} />
            <DeleteIcon onClick={() => onDelete(item.id)} />
          </>
        )}
      </C.Td>
    </C.Tr>
  );
};

export default GridItem;
