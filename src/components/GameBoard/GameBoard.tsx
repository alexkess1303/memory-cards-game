
import React, { useState } from 'react';
import style from './GameBoard.module.scss';
import Card from '../Card/Card';
import { CardData } from '../Card/Card';



const rows = 3;
const cols = 4;
const totalCards = rows * cols;

function buildInitialCardsCollection(): CardData[] {
  // For demo, label is just the card index as string
  return Array.from({ length: totalCards }, (_, i) => ({
    isFaceUp: false,
    label: String(i + 1),
  }));
}

export default function GameBoard() {
  // State: array of CardState
  const [cards, setCards] = useState<CardData[]>(buildInitialCardsCollection());

  const handleCardClick = (id: number) => {
    setCards((prev) => {
      const next = [...prev];
      next[id] = { ...next[id], isFaceUp: !next[id].isFaceUp };
      return next;
    });
  };

  const setAllFaceUp = () => {
    setCards((prev) => prev.map(card => ({ ...card, isFaceUp: true })));
  };

  const setAllFaceDown = () => {
    setCards((prev) => prev.map(card => ({ ...card, isFaceUp: false })));
  };

  return (
    <>
      <div className={style.gameBoard}>
        {cards.map((card, id) => (
          <Card
            key={id}
            id={id}
            cardData={card}
            onClick={() => handleCardClick(id)}
          />
        ))}
      </div>
      <div className={style.gameBoardButtons}>
        <button className={style.MuiButton} onClick={setAllFaceUp}>All Up</button>
        <button className={style.MuiButton} onClick={setAllFaceDown}>All Down</button>
      </div>
    </>
  );
}
