import { useState} from "react";

const Slider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyle = {
        height: '100%',
        position: "relative",
    };

    const slideStyle = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`
    };

    const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    };

    const rigthArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    };

    const dotsContainerStyles = {
        display: 'flex',
        justifyContent: 'center'
    };

    const dotStyles = {
        margin: '0 3px',
        cursor: 'pointer',
        fontSize: '20px',
    };

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = slideIndex => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div style={sliderStyle}>
            <div style={leftArrowStyles} onClick={goToPrevious}>❰</div>
            <div style={rigthArrowStyles} onClick={goToNext}>❱</div>
            <div style={slideStyle}></div>
            <div style={dotsContainerStyles}>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} style={dotStyles} onClick={() => goToSlide(slideIndex)}>•</div>
                ))}
            </div>
        </div>
    );
};

export default Slider;