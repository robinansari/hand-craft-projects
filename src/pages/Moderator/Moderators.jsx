import hridoy from '../../../images/hridoy.jpg'
import robin from '../../../images/robin j.jpg'
import piyas from '../../../images/piyas.jpg'
const Moderators = () => {
    return (
     <div>
       <div>
       <h1 className='text-center text-4xl font-bold
         w-2/4 mx-auto text-amber-500'>Our Administrative Controllers</h1>
       </div>
         <div className='grid grid-cols-3 w-2/4 mx-auto mt-10'>
          <div className="w-40">
        <figure><img className='rounded-full' src={hridoy} alt="Shoes" /></figure>
        <div>
          <h2 className='font-bold text-white'>
           Engr.Hridoy khan
            <div className="badge badge-secondary text-amber-200">Moderator</div>
          </h2>
          <p className="badge badge-secondary text-white">Power Engineer</p>
        </div>
      </div>
          <div className="w-40">
        <figure><img className='w-40 h-40 rounded-full'  src={robin} alt="Shoes" /></figure>
        <div>
          <h2 className='font-bold text-white'>
           Engr.Robiul Islam
            <div className="badge badge-secondary text-amber-200">Moderator</div>
          </h2>
          <p className="badge badge-secondary text-white">Mechanical Engineer</p>
        </div>
      </div>
          <div className="w-40">
        <figure><img className='rounded-full' src={piyas} alt="Shoes" /></figure>
        <div>
          <h2 className='font-bold text-white'>
           Engr.Sultan Mahmud
            <div className="badge badge-secondary text-amber-200">Moderator</div>
          </h2>
          <p className="badge badge-secondary text-white">Power Engineer</p>
        </div>
      </div>
      </div>
     </div>
    );
};

export default Moderators;