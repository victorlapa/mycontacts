import {
  Container, InputSearchContainer, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow (1).svg';
import edit from '../../assets/images/icons/edit (1).svg';
import trash from '../../assets/images/icons/trash (1).svg';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </InputSearchContainer>
      <Header>
        <strong>3 Contatos</strong>
        <a href="/">Novo contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Arthur Leonardo</strong>
              <small>Instagram</small>
            </div>
            <span>arthurleonardo.dev@gmail.com</span>
            <span>(47) 9999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>

        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Arthur Leonardo</strong>
              <small>Instagram</small>
            </div>
            <span>arthurleonardo.dev@gmail.com</span>
            <span>(47) 9999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Arthur Leonardo</strong>
              <small>Instagram</small>
            </div>
            <span>arthurleonardo.dev@gmail.com</span>
            <span>(47) 9999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>

        </Card>

      </ListContainer>
    </Container>
  );
}
