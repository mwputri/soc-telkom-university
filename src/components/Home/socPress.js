
import socbg from "../../assets/img/socbg.jpg";
import prestasi1 from "../../assets/img/ijoict.webp";
import prestasi2 from "../../assets/img/indojc.webp";

import './socPressStyle.css';

const SocPress = () => {
  return (<>
    <figure
      className="relative w-full h-auto ">
      <a href="#">
        <img className="w-full"
          src={socbg}
          alt="image description" />
      </a>
      <figcaption className="absolute text-black top-0 w-full h-full figCaptionContainer">
        <p className="text-base lg:text-5xl">SOC PRESS</p>
        <div className="flex w-full justify-evenly imgContainer">
          <a href="#" className="flex flex-col items-center justify-center">
            <img className="imgSoc" src={prestasi1} alt="" />
            <p className="text-xs text-black"><span className="text-xs lg:text-2xl font-bold mt-2">IJoICT</span> <br />
              <span className="desc">(International Journal  on Information and Communication Technology)</span>
            </p>
          </a>
          <a href="#" className="flex flex-col items-center justify-center">
            <img className="imgSoc" src={prestasi2} alt="" />
            <p className="text-xs text-black"><span className="text-xs lg:text-2xl font-bold mt-2">IndoJC</span> <br />
            <span className="desc">(Indonesia Journal on Computing)</span>
            </p>
          </a>
        </div>

      </figcaption>
    </figure>
  </>)
}

export default SocPress