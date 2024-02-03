import carPng from "../assets/images/pngwing 25.png"

function Home() {
    return (
        <main>
            <section id="section1">
                <div className="container">
                <div className="section_all">
                    <div className="title">
                        <h1>Easy and fast way
                            to rent a car </h1>
                        <p>Lorem ipsum way rent a car anyway car
                            luxury or offroad or daily</p>
                    </div>
                    <div className="rigth_part">
                        <img src={carPng} alt="" />
                    </div>
                </div>
                </div>
                
            </section>
        </main>
    );
}

export default Home;