import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
            <img src="https://avatars2.githubusercontent.com/u/27930049?s=460&u=3b7a805fd434cc4a4556479baf3dd20376691b26&v=4" alt="Alan Morais" />
            <div>
                <strong>
                    Alan Morais 
            </strong>
                <span>
                    Biologia
            </span>
            </div>
        </header>
        <p>
            Só quero ser feliz.
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$: 33,74</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="whatsapp" />
                Entrar em contato
            </button>
        </footer>
    </article>
    );
}

export default TeacherItem;