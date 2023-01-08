import { useEffect, useState } from 'react';

function Modal({
  toggleModal,
  image,
}: {
  toggleModal: boolean;
  image: string;
}) {
  const [showModal, setShowModal] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (!initialLoad) {
      setShowModal(true);
    } else {
      setInitialLoad(false);
    }
  }, [toggleModal]);

  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative md:max-w-scren-lg lg:max-w-screen-xl rounded-lg mx-auto bg-white shadow-lg">
                <button
                  onClick={() => setShowModal(false)}
                  className=" font-bold m-1 mr-3 float-right"
                >
                  X
                </button>

                <img className="object-cover w-full" src={image} />
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Modal;
