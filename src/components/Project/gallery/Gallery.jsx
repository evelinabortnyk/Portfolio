import { useState} from 'react'
import ArrowIcon from '../img/arrow.svg'


function Gallery(data) {
    const gallery = data.data.split(' ')
    const [indexImg, setIndexImg] = useState(0)

    function goEnter() {
        indexImg === 0 ? setIndexImg(gallery.length-1) : setIndexImg(indexImg -1)
    }
    function goNext() {
        indexImg === gallery.length-1? setIndexImg(0) : setIndexImg(indexImg + 1)
    }
   
    return (
        <div className='gallery'>
            {gallery.map((item, index)=> (
                <img key={index} src={item} className={`gallery-img ${indexImg === index ? 'gallery-img--target' : 'gallery-img--no-target'}`} alt="" />
            ))}
            <div className='gallery-circles'>
                <div className="circles-bg">
                    {gallery.map((item, index) => (
                        <p key={index} className={indexImg === index ? 'circle circle-terget' : 'circle'}></p>
                    ))}
                </div>
            </div>
            <div className='gallery-btn-wrap'>
                <button className="gallery-btn" onClick={() => goEnter()}><img src={ArrowIcon} alt="arrow icon" /></button>
                <button className="gallery-btn btn-right" onClick={() => goNext()}><img src={ArrowIcon} alt="arrow icon" /></button>
            </div>
        </div>
    )
}

export default Gallery