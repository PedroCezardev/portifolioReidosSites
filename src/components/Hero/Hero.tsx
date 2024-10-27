import React from 'react';
import style from './styles.module.scss';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <div className={style.leftSide}>
          <Image className={style.logo} src="/logo2.svg" alt="Ícone de correção" width={36} height={36} />
          <h1>
            Tudo o que você pricisa saber para mudar de vida e 
            <span> ganhar mais de 5 mil reais por semana </span> 
            criando sites da sua casa.</h1>
          <h5>
            Aprenda com quem vive o que fala, a fazer da sua casa o que vai mudar a sua vida!
            Você já pode começar hoje fazendo sites de casa e ganhar
            mais de 10 mil por mês a partir dos próximos 30 dias.
          </h5>
          <button>quero mudar de vida</button>
          <div className={style.discount}>
            <Image src="/discountTag.svg" alt="Ícone de correção" width={36} height={36} />
            <p>Apenas por R$ 29,00</p>
          </div>
        </div>
        <div className={style.rightSide}>
          <div className={style.backgroundImages}>
            <Image src="/pix1.svg" alt="Background 1" width={285} height={83} />
             <Image src="/pix1.svg" alt="Background 2" width={285} height={83} />
            <Image src="/pix1.svg" alt="Background 3" width={285} height={83} />
            <Image src="/pix1.svg" alt="Background 4" width={285} height={83} />
          </div>
          <Image className={style.pedro} src="/herbertOnly.svg" alt="Imagem de pedro" width={540} height={547} />
        </div>
      </div>
    </section>
  )
}

export default Hero