import React from 'react';

export function Main() {

    class Age extends React.Component  {
        constructor(props) {
            super(props);
            let birthAge = 1986
            this.state = {date:new Date().getFullYear() - birthAge}
        }

        render() {
            return (
                <span>{this.state.date}</span>
            )
        }
    }

    return (
        <section className="main" id={'main'}>
            <div className="container">
                <div className="main__headline">
                    <h1 className="main__headline-title title">Альтаф Каюмов</h1>
                    <div className="main__headline-desc">
                        <p className="desc">HTML верстальщик</p>
                        <p className="desc"><Age/>&nbsp;<span>лет,</span><span>&nbsp;</span>г.Караганда</p>
                    </div>
                </div>
                <img src={require("../img/wp.png")} alt="Foto" className="main__img"/>
            </div>
        </section>

    );

}

export default Main;