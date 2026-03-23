import styled from 'styled-components'
import { Theme } from '../../themes/light'

import { Props } from '.'

export const Titulo = styled.h3<Props>`
  margin-bottom: 16px;
  color: ${(props) => (props.theme as Theme).corPrincipal};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
`
