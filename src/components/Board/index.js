import React from 'react';
import Square from '../Square';

import { Container } from './styles';

const Board = ({ squares, onClick }) => (
  <Container>
      <div className="wrapper">
        {squares.map((square, i) => (
          <Square 
            key={i}
            value={square} 
            onClick={() => onClick(i)}
          />
        ))}
      </div>
  </Container>
)

export default Board;