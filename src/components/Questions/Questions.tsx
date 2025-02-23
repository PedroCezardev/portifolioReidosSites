import React from 'react'
import style from './style.module.scss';
import Link from 'next/link';
import Accordion from '../Accordion/Accordion';

const Questions = () => {
  return (
    <main  className={style.container}>
        <div className={style.content}>
            <div className={style.leftSide}>
                <div className={style.title}>
                    <h2>
                        Ficou com alguma <span>dúvida</span>?
                    </h2>
                </div>
                <div className={style.subtitle}>
                    <h4>
                        Confira as respostas frequentes ou entre em contato
                        conosco pelos canais abaixo:
                    </h4>
                </div>
                <div className={style.box}>
                    <div className={style.icon}>
                        <img src="/whats.svg" alt="" />
                    </div>
                    <Link href="#">
                        <div className={style.text}>
                            <h3>
                                Atendimento por <span>whatsapp</span>
                            </h3>
                            <p>Toque aqui pra tirar sua dúvidas</p>
                        </div>
                    </Link>
                </div>
                <div className={style.box2}>
                    <div className={style.icon}>
                        <img src="/mail.svg" alt="" />
                    </div>
                    <Link href="#">
                        <div className={style.text}>
                            <h3>
                                Atendimento por <span>e-mail</span>
                            </h3>
                            <p>Toque aqui pra tirar sua dúvidas</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={style.rightSide}>
                <Accordion  
                    title="Como faço pra me cadastrar?"
                    content="Para se cadastrar, basta clicar no botão 'Me Inscrever' em baixo na direita."
                />
                <Accordion 
                    title="Quanto é o preço do curso"
                    content="O curso é um investimento de apenas $49,00 por mês!"
                />
                <Accordion 
                    title="O que eu vou aprender?"
                    content="Nesse curso tem vários modulos diferentes, como: HTML, CSS, JavaScript, Next.js, entre outros!"
                />
                <Accordion 
                    title="Eu posso cancelar a qualquer momento?"
                    content="Sim, você pode cancelar a qualquer momento, sem taxas adicionais."
                />
                <Accordion 
                    title="Quais são as formas de pagamento?"
                    content="Você pode pagar com cartão de crédito, débito ou até mesmo PIX!."
                />
                <Accordion 
                    title="Serve pra iniciantes"
                    content="Com certeza! O curso ensinará tudo o que você precisa para se tornar um programador de verdade!"
                />
                <Accordion 
                    title="Não Gostou e quer cancelar?"
                    content="Sem problemas! Você tem até 7 dias para cancelar e receber seu dinheiro de volta!"
                />
            </div>
        </div>
    </main>
  )
}

export default Questions