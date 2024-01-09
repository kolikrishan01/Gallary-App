import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';


// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';

// import images
import img1 from "../assats/1.jpg"
import img2 from "../assats/2.jpg"
import img3 from "../assats/3.jpg"
import img4 from "../assats/4.jpg"
import img5 from "../assats/5.jpg"
import img6 from "../assats/6.jpg"
import img7 from "../assats/7.jpg"
import img8 from "../assats/8.jpg"
import img9 from "../assats/9.jpg"
import img10 from "../assats/10.jpg"
import img11 from "../assats/11.jpg"
import img12 from "../assats/12.jpg"
import img13 from "../assats/13.jpg"
import img14 from "../assats/14.jpg"
import img15 from "../assats/15.jpg"
import img16 from "../assats/16.jpg"
import img17 from "../assats/17.jpg"
import img18 from "../assats/18.jpg"
import img19 from "../assats/19.jpg"

function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    const images = [
        { src: img1 },
        { src: img2},
        { src: img3 },
        { src: img4},
        { src: img5 },
        { src: img6},
        { src: img7},
        { src: img8},
        { src: img9},
        { src: img10},
        { src: img12},
        { src: img13},
        { src: img14},
        { src: img15},
        { src: img16},
        { src: img17},
        { src: img18},
        { src: img19},
       
    ]
    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
            >
               {
                images?.map((img, index)=>{
                    return(
                       
                        <a href={img?.src} key={index}>
                    <img alt="img1" src={img?.src} />
                </a>
                      
                    )
                })
               }
                
                ...
            </LightGallery>
        </div>
    );
}
export default Gallery