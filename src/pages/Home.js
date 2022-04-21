import React from 'react'
import '../App.css';
import slider1 from "../pages/indexpic/highlight.jpeg"
import slider2 from "../pages/indexpic/highlight2.jpeg"
import slider3 from "../pages/indexpic/highlight3.jpg"
import slider4 from "../pages/indexpic/highlight4.jpg"
import '../css/index.css';
import '../css/style.css';
class Home extends React.Component {
    render() {
        return (
            <div className="rectangle">
                <link href="https://fonts.googleapis.com/css?family=Cormorant Garamond"
                    rel="stylesheet" />
                <div class="quote">
                    Explore the latest pieces from the new collection and enjoy our
                    complimentary delivery. <br />
                    <strong>ShopFlex</strong> brand name society - New Collection, discover it
                    on the l online store.
                </div>
                <section class="bottompic">
                    <img src={slider1} alt="slider1" />
                    <img src={slider2} alt="slider2" />
                    <img src={slider3} alt="slider3" />
                    <img src={slider4} alt="slider4" />
                </section>{/*picture*/}

            </div>);
    }
}
export default Home;