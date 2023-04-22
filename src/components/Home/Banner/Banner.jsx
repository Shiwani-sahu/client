import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return (
    <div className="hero-banner">
        <div className = "content">
        <div className ="text-content">
        <h1>SALES</h1>
        <p>
        Welcome to our shoe store..!
        We are dedicated to providing you with high-quality footwear that not only looks great but feels comfortable too.
        </p>
        <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
            </div>
        </div>
        <img className = "banner-img" src = {BannerImg} alt =""  />
        </div>
    </div>
    );

};

export default Banner;
