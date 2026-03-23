import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'
import { Theme } from '../../themes/light'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button`
  color: ${(props) => (props.theme as Theme).corDeFundo};
  background-color: ${(props) => (props.theme as Theme).corPrincipal};
  font-size: 10px;
  font-weight: bold;
  padding: 8px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top:80px;
  left 0;

  @media (max-width: 768px) {
  margin-bottom: 40px;
  text-align: center;
  }
`
