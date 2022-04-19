import React, { useState, useEffect, useLayoutEffect } from 'react';

export default function ScrollHooks() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        //console.log('Moviendo el Scroll');

        const detectarScroll = () => setScrollY(window.pageYOffset);
        window.addEventListener('scroll', detectarScroll);
        return () => window.removeEventListener('scroll', detectarScroll);
    }, [scrollY]);

    useEffect(() => {
        //console.log('Fase de Montaje');
    }, []); //para que ocupemos la fase de montaje mandar el array vacio

    useEffect(() => {
        //console.log('Fase de Actualizacion');
    });
    useEffect(() => {
        return () => {
            //console.log('Fase de Desmontaje');
        };
    });

    return (
        <>
            <h2>Hooks - useEfect y el Ciclo de Vida</h2>
            <p>Scroll Y del Navegador {scrollY}px</p>
        </>
    );
}
