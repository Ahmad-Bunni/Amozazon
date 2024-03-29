import { useEffect, useState } from 'react';
import Modal from '../../common/navbar-menu/Modal';
import Images from './HomeImages';
import backgroundImage from '/images/background.webp';

function Home() {
  const [fade, setFade] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [toggleModal, setToggleModal] = useState(false);

  const ToggleModal = (image: string) => {
    setCurrentImage(image);
    setToggleModal(!toggleModal);
  };

  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <div>
      <div
        className="lg:min-h-screen bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${backgroundImage})`, height: '50vh' }}
      >
        <div className="flex flex-col pt-16 md:pt-24 pl-4 lg:pl-12 space-y-2 md:space-y-4 lg:space-y-6">
          <span
            className={`transition-all duration-300 ${
              fade ? 'opacity-100' : 'opacity-0'
            } text-white text-2xl md:text-3xl lg:text-5xl font-bold`}
          >
            Your own solar energy
          </span>

          <span
            className={`transition-all duration-1000 ${
              fade ? 'opacity-100' : 'opacity-0'
            } w-1/3 text-white text-[10px] md:text-lg lg:text-xl`}
          >
            Amozazon offers everything you need for your solar panels from
            installment to maintainance with guarantee and at competitive price
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2 p-1">
        {Images.map((item) => {
          return (
            <button key={item.id} onClick={() => ToggleModal(item.src)}>
              <img className="object-cover w-full rounded-md" src={item.src} />
            </button>
          );
        })}
      </div>

      <Modal toggleModal={toggleModal} image={currentImage} />
    </div>
  );
}

export default Home;
