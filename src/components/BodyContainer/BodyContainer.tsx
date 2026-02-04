import React from 'react'
import style from './BodyContainer.module.scss'
import GameBoard from '../GameBoard/GameBoard'

type Props = {  }

export default function BodyContainer({  }: Props) {
  return( 
    <div className={style.bodyContainer}>
      <GameBoard/>
    </div>
  )
}
