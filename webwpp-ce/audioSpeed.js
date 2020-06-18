const interval = setInterval(() => {
    const header = document.querySelector("._1QUKR");
    if (header) {
        clearInterval(interval);

        const opt05 = document.createElement('option');
        opt05.value = '0.5';
        opt05.innerHTML = '0.5';

        const opt1 = document.createElement('option');
        opt1.value = '1';
        opt1.innerHTML = '1';
        opt1.selected = true;

        const opt15 = document.createElement('option');
        opt15.value = '1.5';
        opt15.innerHTML = '1.5';

        const opt2 = document.createElement('option');
        opt2.value = '2';
        opt2.innerHTML = '2';

        const select = document.createElement('select');
        select.classList.add(['changeSpeed']);
        select.title = "Velocidade dos áudios"
        select.appendChild(opt05);
        select.appendChild(opt1);
        select.appendChild(opt15);
        select.appendChild(opt2);

        select.addEventListener('change', (event) => {
            const audios = document.querySelectorAll('audio');
            audios.forEach(audio => {
                audio.playbackRate = event.target.value;
            })
            console.log(`velocidade do audio alterado para ${event.target.value}`);
        })

        header.appendChild(select);
    }
}, 1000);
