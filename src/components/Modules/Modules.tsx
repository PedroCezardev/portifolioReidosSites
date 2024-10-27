import React, { useState } from 'react';
import style from './style.module.scss';
import Square from './Square/Square';
import { motion } from 'framer-motion';

const Modules = () => {

    const [ isSpecificPointReached ] = useState(false)

    const backgroundColor = isSpecificPointReached ? "#010425" : "#ffffff";
    const textColor = isSpecificPointReached ? "white" : "black";
    const borderColor = isSpecificPointReached ? "white" : "#ccc";
    const containerColor = isSpecificPointReached ? "#0a0730" : "#F0F0F0";

  return (
    <>
        <motion.div 
            className={style.container}
            style={{ backgroundColor }}
        >
            <section className={style.container}>
                <div className={style.content}>
                    <div className={style.title}>
                        <h2> 
                            <span>módulos exclusivos</span> 
                        </h2>
                    </div>
                    <div className={style.row}>
                        <Square 
                            color={textColor} 
                            moduleTitle="Módulo 1"
                            title="Design com o Figma"
                            bodyText="Descubra como criar designs incríveis utilizando a poderosa ferramenta Figma. 
                            Aprenda técnicas de design que irão transformar seus projetos em verdadeiras obras de arte." 
                            price="419,00"
                            containerColor={containerColor} 
                            borderColor={borderColor} 
                            width="100%"
                        />
                        <Square 
                            color={textColor} 
                            moduleTitle="Módulo 2"
                            title="Wordpress"
                            bodyText="O WordPress é uma plataforma incrível para criação de websites, permitindo liberdade
                            criativa com facilidade de uso. Oferece uma infinidade de plugins para ampliar funcionalidades,
                            além de ser otimizado para SEO." 
                            price="419,00"
                            containerColor={containerColor} 
                            borderColor={borderColor} 
                            width="100%"
                        />
                    </div>
                    <div className={style.row}>
                        <Square 
                            color={textColor} 
                            moduleTitle="Módulo 3"
                            title="Estratégias de venda"
                            bodyText="Potencialize suas vendas! Aprenda a conectar-se com clientes, criar ofertas atrativas 
                            e fechar negócios de forma eficiente. Transforme possibilidades em lucros conosco e destaque-se 
                            no mundo das vendas!" 
                            price="319,00"
                            containerColor={containerColor} 
                            borderColor={borderColor} 
                            width="100%"
                        />
                        <Square 
                            color={textColor} 
                            moduleTitle="Módulo 4"
                            title="Programação do zero ao pro"
                            bodyText="Aprenda conceitos fundamentais e avançados de programação, com técnicas práticas 
                            para construir projetos sólidos. Com nosso curso, você terá as habilidades necessárias para 
                            se destacar no mundo da tecnologia!" 
                            price="319,00"
                            containerColor={containerColor} 
                            borderColor={borderColor} 
                            width="130%"
                        />
                    </div>
                    <div className={style.row}>
                        <Square 
                            color={textColor} 
                            moduleTitle="Módulo 5"
                            title="Html, CSS e Javascript"
                            bodyText="Aprenda tudo! Com o conhecimento dessas linguagens você pode construir não só sites, 
                            mas softwares incríveis com funcionalidades que vão te surpreender. Depois que você aprender 
                            essas o resto fica fácil!" 
                            price="349,00"
                            containerColor={containerColor} 
                            borderColor={borderColor} 
                            width="100%"
                        />
                        <Square 
                            color={textColor} 
                            moduleTitle="Módulo 6"
                            title="Github"
                            bodyText="Domine o GitHub! Aprenda a gerenciar seus projetos, versionar seu código e colaborar 
                            em equipe com facilidade. Com essas habilidades, você estará pronto para enfrentar qualquer 
                            desafio no desenvolvimento!" 
                            price="219,00"
                            containerColor={containerColor} 
                            borderColor={borderColor}
                            width="100%"
                        />
                        <Square 
                            color={textColor} 
                            moduleTitle="Módulo 7"
                            title="React"
                            bodyText="Crie Interfaces Incríveis! Com React, você aprenderá a desenvolver interfaces modernas, 
                            dinâmicas e eficientes. Após dominar essa biblioteca, criar aplicações web será muito mais simples!" 
                            price="289,00"
                            containerColor={containerColor} 
                            borderColor={borderColor}
                            width="100%"
                        />
                    </div>
                </div>
            </section>
        </motion.div>
    </>
  )
}

export default Modules