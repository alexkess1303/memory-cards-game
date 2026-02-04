import React from 'react';
import style from './Card.module.scss';
import cardBack from '../../../assets/card-back.png';
import { MemoryCard } from '../../domain/MemoryCard';

type CardProps = {
  id: number;
  cardData: MemoryCard;
  onClick: () => void;
};

export default function Card({ onClick, cardData }: CardProps) {
  return (
    <div className={style.card} onClick={onClick}>
      {!cardData.isFaceUp && <img src={cardBack} alt="Card back" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
      {cardData.isFaceUp && <div className={style.cardFace}>{cardData.label}</div>}
    </div>
  );
}
