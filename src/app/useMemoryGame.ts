import { useState } from 'react';

export type MemoryCard = {
  id: number;
  label: string;
  isFaceUp: boolean;
  isMatched: boolean;
};

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function buildPairedShuffledCards(labels: string[]): MemoryCard[] {
  const cards: MemoryCard[] = labels
    .flatMap((label, i) => [
      { id: i * 2, label, isFaceUp: false, isMatched: false },
      { id: i * 2 + 1, label, isFaceUp: false, isMatched: false },
    ]);
  return shuffle(cards);
}

export function useMemoryGame(labels: string[]) {
  const [cards, setCards] = useState<MemoryCard[]>(() => buildPairedShuffledCards(labels));
  const [flipped, setFlipped] = useState<number[]>([]);

  function flipCard(id: number) {
    if (flipped.length === 2 || cards[id].isFaceUp || cards[id].isMatched) return;
    const newCards = cards.map((card, idx) =>
      idx === id ? { ...card, isFaceUp: true } : card
    );
    const newFlipped = [...flipped, id];
    setCards(newCards);
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (newCards[first].label === newCards[second].label) {
        setTimeout(() => {
          setCards(cards => cards.map((card, idx) =>
            (idx === first || idx === second)
              ? { ...card, isMatched: true }
              : card
          ));
          setFlipped([]);
        }, 600);
      } else {
        setTimeout(() => {
          setCards(cards => cards.map((card, idx) =>
            (idx === first || idx === second)
              ? { ...card, isFaceUp: false }
              : card
          ));
          setFlipped([]);
        }, 900);
      }
    }
  }

  function resetGame() {
    setCards(buildPairedShuffledCards(labels));
    setFlipped([]);
  }

  return {
    cards,
    flipCard,
    resetGame,
  };
}
