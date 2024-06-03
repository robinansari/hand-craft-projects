import { Link } from 'react-router-dom';
import pic from '../../../images/samim-removebg-preview.png'
import { AiFillAppstore } from "react-icons/ai";
const About = () => {
    return (
       
      <div>
         <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
          <img src={pic} className="full
           rounded-lg " />
          
           <h1 className='text-2xl font-semibold text-center mt-2 text-orange-300'>Engr.Mahadi Hasan <br /> (CEO)</h1>
          </div>
          <div className='space-y-14'>
            <h1 className="text-4xl mb- font-bold text-yellow-300">About Our CEO</h1>
          <div>
          <h1 className="text-xl font-bold  text-blue-200">Hello, 
            Im Engr.Mahadi Hasan CEO of <span className='text-yellow-300'>handCraft</span></h1>
            <div className='space-y-5'>
            <p className=" font-bold">Dear customer, </p>
            <p className=' text-white'>An honest less wealthy person has a chance of 
              growing their <br /> wealth strictly because of their honesty. <br /> 
              If they can put themselves in the path to be proven,<br />
               they can be shown to <br />be dependable and can be given ever <br />
               increasing opportunities. <br />
A dishonorable rich person will find that people <br />
 will only work with him once. <br />You may get me for
  a little, you may even get me for a lot</p>
            </div>
          </div>
          <div className='flex gap-6'>
          <button className="bg-red-800
             text-white p-1 font-bold hover:bg-blue-700 rounded-lg h-8"><Link to='/products'>Buy a products</Link></button>
            <button className="bg-red-800
               font-bold hover:bg-blue-700 rounded-lg"><Link to='/'><AiFillAppstore color='white' size={40}></AiFillAppstore></Link></button>
          </div>
          </div>
        </div>
      </div>
      </div>
    );
};

export default About;