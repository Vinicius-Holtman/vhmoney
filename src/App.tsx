import { useState } from 'react';
import Modal from 'react-modal'

import { Dashboard } from "./components/Dashboard/intex";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/global";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Dashboard />

      <Modal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}>
        <h2>Cadastrar Informacao</h2>
      </Modal>
      
      <GlobalStyles />
    </>
  );
}
