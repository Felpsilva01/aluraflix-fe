import React, { useEffect, useState } from 'react';
import { FaSearch, FaBell, FaGift, FaCaretDown } from 'react-icons/fa';
import LogoNetflix from '../../assets/logo.png';
import { Container, RoutesMenu, Profile } from './styles';
import AddMovieModal from '../AddMovieModal/AddMovieModal';

const NavBar: React.FC = () => {
  const [isBlack, setIsBlack] = useState(false);
  const [showAddMovieModal, setShowAddMovieModal] = useState(false); // Estado para controlar a visibilidade do modal

  useEffect(() => {
    // Adiciona o listener para verificar o scroll
    const handleScroll = () => {
      setIsBlack(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    // Remove o listener quando o componente for desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOpenAddMovieModal = () => {
    setShowAddMovieModal(true);
  };

  const handleCloseAddMovieModal = () => {
    setShowAddMovieModal(false);
  };

  const handleAddMovie = (movieData: { title: string; description: string }) => {
    // Implemente a lógica para adicionar o filme ao catálogo aqui
    console.log('Adicionar filme ao catálogo:', movieData);
    handleCloseAddMovieModal(); // Fecha o modal após adicionar o filme
  };

  return (
    <Container isBlack={isBlack}>
      <RoutesMenu>
        <img src={LogoNetflix} alt="Netflix Logo" />
        <ul>
          <li style={{ fontWeight: 'bold' }}>Inicio</li>
          <li>Series</li>
          <li>Filmes</li>
          <li>Mais Recentes</li>
          <li>Minha Lista</li>
          <li>
            <button type="button" onClick={handleOpenAddMovieModal}>
              Sugestão de Filme
            </button>
          </li>
        </ul>
      </RoutesMenu>
      <Profile>
        <FaSearch />
        <FaGift />
        <FaBell />
        <button type="button">
          <img
            src="https://occ-0-2023-185.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABcLtVOXjghzlDrVwmPHGQtkXjoJPmpISBttze62ZpxaaFWq-LZVH5yZxMD15UVLU6nd4GIUtTSHOMsbUOdPCIYRL2-2bGNU.png?r=b38"
            alt="Imagem do perfil do usuário"
          />
          <FaCaretDown />
        </button>
      </Profile>

      {/* Renderiza o modal somente se showAddMovieModal for true */}
      {showAddMovieModal && (
        <AddMovieModal
          isOpen={showAddMovieModal}
          onClose={handleCloseAddMovieModal}
          onAddMovie={handleAddMovie}
        />
      )}
    </Container>
  );
};

export default NavBar;
