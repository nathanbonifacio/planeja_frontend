import React, { useState } from "react";
import Grid from "../Grid";
import * as C from "./styles";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false); // Estado que determina se é despesa (true) ou renda (false)

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      toast.error("Informe a descrição e o valor!");
      return;
    } else if (amount <= 0) {
      toast.error("O valor tem que ser positivo!");
      return;
    }
  
    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    };
  
    handleAdd(transaction); // Esta função deve adicionar a transação à lista
  
    setDesc("");
    setAmount("");
  };
  

  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </C.InputContent>
        <C.RadioGroup>
          <C.Input
            type="radio"
            id="rIncome"
            defaultChecked={!isExpense} // Se não é despesa, então é renda
            name="group1"
            onChange={() => setExpense(false)}
          />
          <C.Label htmlFor="rIncome">Renda</C.Label>
          <C.Input
            type="radio"
            id="rExpenses"
            checked={isExpense} // Se é despesa, então é selecionado
            name="group1"
            onChange={() => setExpense(true)}
          />
          <C.Label htmlFor="rExpenses">Despesa</C.Label>
        </C.RadioGroup>
        <C.Button onClick={handleSave}>ADICIONAR</C.Button>
      </C.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
      <ToastContainer autoClose={3000} position="bottom-left"/>
    </>
  );
};

export default Form;