import React, { useState } from "react";
import GridItem from "../GridItem";
import * as C from "./styles";

const Grid = ({ itens, setItens }) => {
  const [editingId, setEditingId] = useState(null);

  const onDelete = (ID) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  const onEdit = (editedItem) => {
    const newArray = itens.map((item) =>
      item.id === editedItem.id ? editedItem : item
    );
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
    setEditingId(null);
  };

  const onStartEdit = (ID) => {
    setEditingId(ID);
  };

  const onCancelEdit = () => {
    setEditingId(null);
  };

  // Filtrar despesas e rendas
  const despesas = itens.filter((item) => item.expense);
  const rendas = itens.filter((item) => !item.expense);

  return (
    <>
      <C.Table>
        <C.Thead>
          <C.Tr>
            <C.Th width={40}>Descrição</C.Th>
            <C.Th width={40}>Valor</C.Th>
            <C.Th width={10} alignCenter>
              Tipo
            </C.Th>
            <C.Th width={10}></C.Th>
          </C.Tr>
        </C.Thead>
        <C.Tbody>
          
          {/* Renderizar rendas */}
          <C.Tr>
            <C.Th colSpan={4}>Rendas</C.Th>
          </C.Tr>
          {rendas?.map((item, index) => (
            <GridItem
              key={index}
              item={item}
              isEditing={item.id === editingId}
              onDelete={onDelete}
              onEdit={onEdit}
              onStartEdit={onStartEdit}
              onCancelEdit={onCancelEdit}
            />
          ))}

          {/* Renderizar despesas */}
          <C.Tr>
            <C.Th colSpan={4}>Despesas</C.Th>
          </C.Tr>
          {despesas?.map((item, index) => (
            <GridItem
              key={index}
              item={item}
              isEditing={item.id === editingId}
              onDelete={onDelete}
              onEdit={onEdit}
              onStartEdit={onStartEdit}
              onCancelEdit={onCancelEdit}
            />
          ))}

        </C.Tbody>
      </C.Table>
    </>
  );
};

export default Grid;
