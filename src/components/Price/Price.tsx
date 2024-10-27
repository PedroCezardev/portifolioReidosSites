import React from 'react'
import style from './styles.module.scss';
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Price = () => {

    const animationVariants = {
        visible: { opacity: 1, translateY: 0 },
        hidden: { opacity: 0, translateY: 50},
    }

    const handleClick = () => {
        window.location.href = 'https://meu-portifolio-lime.vercel.app/';
    }

  return (
    <section className={style.container}>
        <div className={style.content}>
            <InView threshold={0.5} triggerOnce={false}>
                {({inView, ref}) => (
                    <motion.div
                        ref={ref}
                        className={style.leftSide}
                        variants={animationVariants}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        transition={{ duration: 0.5 }}
                    >
                        <h2>
                            Quanto você precisará <span> investir?</span>
                        </h2>
                        <h5>
                            Torne-se um programador e mude de vida criando sites e landing pages!
                        </h5>
                    </motion.div>
                )}
            </InView>
            
            <InView  threshold={0.5} triggerOnce={false}>
            {({inView, ref}) => (
                <motion.div
                ref={ref}
                className={style.middle}
                variants={animationVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ duration: 0.5 }}
            >
                <div className={style.logo}>
                    <img src="logo2.svg" alt="" />
                </div>
                <div className={style.money}>
                    <img src="money.svg" alt="" />
                    <p>TUDO ISSO POR APENAS</p>
                </div>
                <div className={style.bigMoney}>
                    <h2>R$ 29,00</h2>
                    <h3>/Mês</h3>
                </div>
                <div className={style.middleMoney}>
                    <h3>Assinatura</h3>
                </div>
                <div className={style.button}>
                    <button onClick={handleClick} id="iniciar-checkout">
                        <p>Quero mudar minha vida com sites</p>
                        <img src="buttonArrow.svg" alt="" />
                    </button>
                </div>
                <hr className={style.hr} />
                <div className={style.payments}>
                    <img src="/newPayment.svg" alt="" />
                </div>
            </motion.div>
            )}
            </InView>
            <InView threshold={0.5} triggerOnce={false}>
            {({inView, ref}) => (
                <motion.div
                    ref={ref}
                    className={style.rightSide}
                    variants={animationVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    transition={{ duration: 0.5 }}
                >
                    {' '}
                    <h3>
                        Relembrando tudo que você vai ter acesso agora:
                    </h3>
                    <div className={style.modules}>
                        <img src="smallCheck.svg" alt="" />
                        <p>Módulo 01: Design com figma</p> 
                    </div>
                    <div className={style.modules}>
                        <img src="smallCheck.svg" alt="" />
                        <p>Módulo 02: WordPress</p> 
                    </div>
                    <div className={style.modules}>
                        <img src="smallCheck.svg" alt="" />
                        <p>Módulo 03: Estratégias de venda </p> 
                    </div>
                    <div className={style.modules}>
                        <img src="smallCheck.svg" alt="" />
                        <p>Módulo 04: Programação do zero ao pro </p> 
                    </div>
                    <div className={style.modules}>
                        <img src="smallCheck.svg" alt="" />
                        <p>Módulo 05: Anúncios online </p> 
                    </div>
                    <div className={style.modules}>
                        <img src="smallCheck.svg" alt="" />
                        <p>Suporte do REI</p> 
                    </div>
                </motion.div>
            )}
            </InView>
        </div>
    </section>
  )
}

export default Price