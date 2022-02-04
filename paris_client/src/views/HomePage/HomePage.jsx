/**
 * Render the Home page component
 * 
 */

import React from 'react';

import todo from '../../assets/banner.jpeg'

import BoxBtnHomeLink from '../../components/boxBtnHomeLink/boxBtnHomeLink';

const HomePage = () => {
    
    return (
        <>
            <main>
                <section className='homeImgContent'>
                    <article className='homeTitleBoxContent'>
                        <hr></hr>
                        <h1>CRUD APP </h1>
                        <p>Full Stack Mern</p>
                        <hr></hr>
                    </article>
                    <article className='homeBannerContent'>
                        <h3> Full stack CRUD application Mern + Jest + Sass </h3>
                    </article>
                    <img className="homeImgHero" src={todo} alt='toDo img'/>
                </section>
            </main>

            <footer className='homeFooterContent'>
                <BoxBtnHomeLink/>
            </footer>
        </>
    )
};

export default HomePage;
