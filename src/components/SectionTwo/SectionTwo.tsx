import React from 'react'
import style from './styles.module.scss';
import Image from 'next/image';

const SectionTwo = () => {
  return (
    <section className={style.container}>
        <div className={style.content}>
            <div className={style.title}>
                <h2>A diferença absurda entre o que vc está
                    <span> prestes a </span>
                    <span> adquirir com o Rei </span>
                    e do que está fugindo...
                </h2>
            </div>
            <div className={style.bottom}>
                <div className={style.leftBox}>
                    <div className={style.titleBox}>
                        <h5>Curso meia boca</h5>
                    </div>
                    <div className={style.topics}>
                        <Image src="/redX.svg" alt="Ícone de correção" width={24} height={24} />
                        <p>Faturamento incerto</p>
                    </div>
                    <div className={style.topics}>
                        <Image src="/redX.svg" alt="Ícone de correção" width={24} height={24} />
                        <p>Professor que não vive o que ensina</p>
                    </div>
                    <div className={style.topics}>
                        <Image src="/redX.svg" alt="Ícone de correção" width={24} height={24} />
                        <p>Falta de organização</p>
                    </div>
                    <div className={style.topics}>
                        <Image src="/redX.svg" alt="Ícone de correção" width={24} height={24} />
                        <p>Curso básico</p>
                    </div>
                    <div className={style.topics}>
                        <Image src="/redX.svg" alt="Ícone de correção" width={24} height={24} />
                        <p>Não ensina sobre o mercado real</p>
                    </div>
                    <div className={style.topics}>
                        <Image src="/redX.svg" alt="Ícone de correção" width={24} height={24} />
                        <p>Sem suporte</p>
                    </div>
                </div>
                <div className={style.rightBox}>
                    <div className={style.titleBox}>
                        <h5>Curso do <span> REI </span> </h5>
                    </div>
                    <div className={style.pros}>
                        <Image src="/correct.svg" alt="Ícone de correção" width={24} height={24} />
                        <p>Faturamento alto</p>
                    </div>
                    <div className={style.pros}>
                        <Image src="/correct.svg" alt="Ícone de correção" width={24} height={24} />
                        <p>Professor vive o que ensina</p>
                    </div>
                    <div className={style.pros}>
                        <Image src="/correct.svg" alt="Ícone de correção" width={24} height={24} />
                        <p>Curso ponta a ponta</p>
                    </div>
                    <div className={style.pros}>
                        <Image src="/correct.svg" alt="Ícone de correção" width={24} height={24} />
                        <p>Bônus sobre mercado de trabalho</p>
                    </div>
                    <div className={style.pros}>
                        <Image src="/correct.svg" alt="Ícone de correção" width={24} height={24} />
                        <p>Dicas exclusivas</p>
                    </div>
                    <div className={style.pros}>
                        <Image src="/correct.svg" alt="Ícone de correção" width={24} height={24} />
                        <p>Suporte exclusivo do rei</p>
                    </div>
                </div>
            </div>
            <div className={style.button}>
                <button>Quero aprender com o Rei</button>
            </div>
        </div>
    </section>
  )
}

export default SectionTwo