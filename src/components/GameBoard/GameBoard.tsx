
import React from 'react';
import style from './GameBoard.module.scss';
import Card from '../Card/Card';
import { MemoryCard } from '../../domain/MemoryCard';
import { useMemoryGame } from '../../app/useMemoryGame';



const rows = 3;
const cols = 4;
const totalCards = rows * cols;
// Build 6 pairs (12 cards) with labels A-F
const labels = Array.from({ length: totalCards / 2 }, (_, i) => String.fromCharCode(65 + i));

export default function GameBoard() {
  const { cards, flipCard, resetGame } = useMemoryGame(labels);

  const setAllFaceUp = () => {
    // Not part of useMemoryGame, so just for demo, flip all cards up
    cards.forEach(card => {
      if (!card.isFaceUp && !card.isMatched) flipCard(card.id);
    });
  };

  const setAllFaceDown = () => {
    // Not part of useMemoryGame, so just for demo, flip all cards down (not matched)
    cards.forEach(card => {
      if (card.isFaceUp && !card.isMatched) flipCard(card.id);
    });
  };

  return (
    <>
      <div className={style.gameBoard}>
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            cardData={card}
            onClick={() => flipCard(card.id)}
          />
        ))}
      </div>
      <div className={style.gameBoardButtons}>
        {/* <button className={style.MuiButton} onClick={setAllFaceUp}>All Up</button>
        <button className={style.MuiButton} onClick={setAllFaceDown}>All Down</button> */}
        <button className={style.MuiButton} onClick={resetGame}>New Game</button>
      </div>
    </>
  );
}
