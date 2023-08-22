import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
const ImgSLider = (props) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <Carousel {...settings}>
            <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
        </Carousel>
    )
}

const Carousel = styled(Slider)`
margin-top: 20px;
overflow: hidden;

& > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
}
&: hover {
    opacity: 1;
    height: 100%
}

`
export default ImgSLider