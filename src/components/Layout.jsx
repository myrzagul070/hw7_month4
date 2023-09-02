import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "./Layout.css"

const Layout = () => {
    return (
        <div>


            <header>
                <Link to="/">Главное меню</Link>
                <Link to="/about">Инфо</Link>
                <Link to="/posts">Посты</Link>
                <Link to="/comments">Комментарии</Link>
            </header>

            <Outlet/>

            <footer>
                <h2>FOOTER</h2>
            </footer>


        </div>
    );
};

export default Layout;