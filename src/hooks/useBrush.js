import React, { useEffect, useState } from "react";

const useBrush = () => {

    const [ brushType, setBrushType ] = useState({})

    // Para pintar necesito el contexto del canvas

    useEffect(() => {
        window.addEventListener('mousedown', (e) => {
            const canvas = document.querySelector('#canvas');
            const ctx = canvas.getContext('2d');
            
            // Empiezo a pintar
            ctx.lineCap = "round";
            ctx.strokeStyle = "black"
            ctx.lineWidth = 5;

            ctx.beginPath();
            ctx.lineTo(e.clientX, e.clientY);
            // On mouse down we should be able to paint
        });

        // Unsubscribe
        return () => window.removeEventListener('mousedown');
    }, [])

}

export default useBrush;