import React, { useState } from 'react';
import styled from 'styled-components';


const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 20px;
  border-radius: 10px;
  width: 80%; 
  height: 300px;
  max-width: 500px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
`;

const SubmitButton = styled.button`
  background-color: darkred;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddMovie: (movie: { title: string; description: string; }) => void;
}

const AddMovieModal: React.FC<ModalProps> = ({ isOpen, onClose, onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    onAddMovie({ title, description });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>Sugestionar Novo Filme</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
          <div>
            <label htmlFor="title">Titulo</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">
            <SubmitButton>Sugerir Filme</SubmitButton>
          </button>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AddMovieModal;
