import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components'; // tema atual
import { shade } from 'polished'; // pega cor e aplica percentual de preto em cima

import { Container } from './styles';

interface Props { // tipo de propriedades a serem recebidas
   toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
   const { colors, title } = useContext(ThemeContext);

   return (
      <Container>
         Hello World

         <Switch 
            onChange={toggleTheme}
            checked={title === 'dark'} // checked quando o title for dark
            checkedIcon={false}
            uncheckedIcon={false}
            height={15}
            width={40}
            handleDiameter={20}
            offColor={shade(0.15, colors.primary)}
            onColor={colors.secundary}
         />
      </Container>
   );
}

export default Header;