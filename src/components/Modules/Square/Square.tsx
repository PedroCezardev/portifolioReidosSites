import React from 'react';
import style from './styles.module.scss';
import { motion } from 'framer-motion';

interface SquareProps{
  color: string;
  borderColor: string;
  containerColor: string;
  moduleTitle: string;
  title: string;
  bodyText: string;
  price: string;
  width: string;
}

const Square = ({
  color,
  borderColor, 
  containerColor,
  moduleTitle,
  title,
  bodyText,
  price,
  width,
}: SquareProps) => {
  return (
    <motion.div
      className={style.container}
      style={{ 
        borderColor, 
        color, 
        backgroundColor: containerColor,
        width,
      }}
    >
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.texts}>
            <div className={style.top}>
              <h4>{moduleTitle}</h4>
            </div>
            <div className={style.title}>
              <h3 style={{ color }} >{title}</h3>
            </div>
            <div className={style.body}>
              <h5 style={{ color }} >{bodyText}</h5>
            </div>
          </div>
          <hr className={style.hr} style={{backgroundColor: borderColor}} />
          <div className={style.bottom}>
            <h4 style={{ color }}>
              Preço: <span>R${price}</span>
            </h4>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Square