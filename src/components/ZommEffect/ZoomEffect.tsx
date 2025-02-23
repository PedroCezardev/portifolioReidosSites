import React, { useEffect } from 'react';
import style from './styles.module.scss';

const ZoomEffect = () => {
    useEffect(() => {
        const loadGSAP = async () => {
            const { default: gsap } = await import('gsap');
            const { ScrollTrigger } = await import('gsap/ScrollTrigger');

            gsap.registerPlugin(ScrollTrigger);

            const isMobile = window.innerWidth <= 768;
            const isSmallMobile = window.innerWidth <= 413;
            let scale, xPercent, yPercent;

            if (isSmallMobile) {
                scale = 170;
                xPercent = 50;
                yPercent = -4000;
            } else if (isMobile) {
                scale = 170;
                xPercent = -500;
                yPercent = -4500;
            } else {
                scale = 700;
                xPercent = -4300;
                yPercent = 50;
            }

            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

            gsap.to('#zoom-text', {
                scale3d: 100,
                scale,
                duration: 3,
                xPercent,
                yPercent,
                transformOrigin: 'center center',
                scrollTrigger: {
                    trigger: '#zoom-in',
                    pin: true,
                    end: `+=${window.innerHeight / 2}`,
                    scrub: 0.5,
                },
            });

            gsap.fromTo(
                '#next-text',
                { y: '1300%', opacity: 0 },
                {
                    y: '0%',
                    opacity: 1,
                    scrollTrigger: {
                        trigger: '#zoom-in',
                        start: 'top 20%',
                        end: 'top -20%',
                        scrub: true,
                    },
                    ease: 'power3.out',
                }
            );

            gsap.fromTo(
                '#next-text span',
                { y: 20, opacity: 0.3 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: '#zoom-in',
                        start: 'top 0%',
                        end: 'bottom -10%',
                        scrub: true,
                    },
                    ease: 'power3.out',
                }
            );
        };

        loadGSAP();
    }, []);

    const splitText = (text: string) => {
        return text.split(' ').map((word, i) => {
            if (word.includes('<br/>')) {
                return (
                    <React.Fragment key={i}>
                        <br />
                        <span style={{opacity: 0.3}}>
                            {' '}
                            {word.replace('<br/>', '')}&nbsp; {' '}
                        </span>
                    </React.Fragment>
                )
            } else {
                return (
                    <span key={i} style={{opacity: 0.3}}>
                        {' '}
                        {/* Envolve a palavra em um <span> com opacidade reduzida */}
                        {word}&nbsp; {' '} {/* Adiciona um espaço após cada palavra */}
                    </span>
                )
            }
        })
    }

    return (
        <section id="zoom-in" className={style.zoomSection}>
            <h2 id="zoom-text" className={style.zoomText}>
                O que <span>você</span> irá aprender?
            </h2>
            <div className={style.textWrap}>
                <p id="next-text" className={style.nextText}>
                    {splitText(' Impulsione sua carreira <br/> com nosso curso completo! <br/> Aprenda Figma, Wordpress. ')}
                </p>
                <p id="next-text" className={style.nextText}>
                    {splitText(' HTML, CSS, JavaScript, <br/> e técnicas de venda. <br/> Cada módulo garante um aprendizado.  ')}
                </p>
                <p id="next-text" className={style.nextText}>
                    {splitText(' Prático e eficiente. <br/> Domine habilidades valiosas <br/> e alcance o sucesso no mundo digital. ')}
                </p>
            </div>
        </section>
    );
};

export default ZoomEffect;
