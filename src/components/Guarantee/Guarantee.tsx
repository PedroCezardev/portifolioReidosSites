import React from 'react';
import style from './styles.module.scss';

const Guarantee = () => {
  return (
    <section className={style.container}>
        <div className={style.content}>
            <div className={style.top}>
                <div className={style.leftSide}>
                    <div className={style.leftSideContent}>
                        <h5>Dias de</h5>
                        <h5>garantia</h5>
                        <div className={style.starts}>
                            <img src="/star.svg" />
                            <img src="/star.svg" />
                            <img src="/star.svg" />
                            <img src="/star.svg" />
                            <img src="/star.svg" />
                        </div>
                    </div>
                </div>
                <div className={style.rightSide}>
                    <h5>
                        Experimente por 
                        <span> 7 dias</span>
                    </h5>
                    <p>Garantindo a sua vaga agora, você não corre risco nenhum!</p>
                    <p>
                        Você pode ver todo o Protocolo por dentro e, caso perceba 
                        que não faz sentido para o seu momento, basta me enviar 
                        um e-mail e eu vou devolver 100% do seu investimento.
                    </p>
                    <p>O risco é todo meu.</p>
                </div>
            </div>
            <div className={style.bottom}>
                <div className={style.info}>
                    <div className={style.icon}>
                        <img src="/safePayment.svg" alt="" />
                    </div>
                    <div className={style.text}>
                        <h5>Pagamento seguro</h5>
                        <p>
                            Diversas formas de pagar, todas com selo de segurança.
                        </p>
                    </div>
                </div>
                <div className={style.info}>
                    <div className={style.icon}>
                        <img src="/lock.svg" alt="" />
                    </div>
                    <div className={style.text}>
                        <h5>Liberação imediata</h5>
                        <p>
                            Receba seu login e senha na mesma hora que comprar.
                        </p>
                    </div>
                </div>
                <div className={style.info}>
                    <div className={style.icon}>
                        <img src="/infinite.svg" alt="" />
                    </div>
                    <div className={style.text}>
                        <h5>Acesso permanente</h5>
                        <p>
                            Enquanto estiver o plano, você terá acesso para sempre.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Guarantee