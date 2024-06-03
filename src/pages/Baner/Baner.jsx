import dress from '../../../images/dress5.jpg'
import dress2 from '../../../images/dress3.jpg'
import dress3 from '../../../images/dress2.jpg'
import dress4 from '../../../images/dress1.jpg'

import { AiFillAppstore } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Baner = () => {
    return (
        <div>
    <div className="carousel">
  <div id="item1" className="carousel-item relative h-[600px] w-full">
    <img src={dress} className="w-full" />
    <div className='absolute right-5 left-5 flex justify-end top-64'>
    <div>
    <h1 className='text-4xl font-extrabold  text-sky-200 '>Allah loves an honest <br />businessman</h1>
    <button className=' text-white'>Please visit our website
        <Link to='/login'><AiFillAppstore size={50} color='white'></AiFillAppstore></Link> </button>
    </div>
    </div>
  </div> 
  <div id="item2" className="carousel-item h-[600px] w-full">
    <img src={dress2}className="w-full" />
  </div> 
  <div id="item3" className="carousel-item h-[600px] w-full">
    <img src={dress3} className="w-full" />
  </div> 
  <div id="item4" className="carousel-item h-[600px] w-full">
    <img src={dress4} className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
  <a href="#item1" className="btn btn-xs">5</a>
</div>

        </div>
    );
};

export default Baner;