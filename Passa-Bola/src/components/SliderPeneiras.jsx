import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderPeneiras = () => {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    axios
      .get("/peneiras.json")
      .then((res) => {
        setEventos(res.data);
        console.log(res.data);
      })
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-[90%] mx-auto px-2 my-6">
      <Slider {...settings}>
        {eventos.map((ev, i) => (
          <div key={i} className="px-4">
            <div className="flex flex-col justify-center items-centerbg-[#111318] overflow-hidden shadow-md transition-transform duration-300">
              <img
                src={ev.imagem_url}
                alt={ev.Título}
                className="w-full h-[150px] object-cover rounded-lg"
              />
              <div className="py-3">
                <h2 className="text-white font-semibold text-sm">{ev.Título}</h2>
                <p className="text-gray-400 text-xs mt-1">{ev.Descrição}</p>
                <p className="text-gray-500 text-xs mt-1">
                  {ev.hora} – {ev.data}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderPeneiras;
