import aegImage from '/images/aeg370.png';
import iq7plus from '/images/iQ7plus.webp';
import jinkoImage from '/images/jinko370.png';

function Products() {
  return (
    <div className="mt-8 md:mt-0 p-8 md:p-24 space-y-12">
      <div className="flex flex-col md:flex-row md:divide-x-2 pb-8 border-b-2 md:border-b-0 md:pb-0">
        <div className="md:flex-1 mb-4 md:mb-0">
          <div className="flex items-center justify-center">
            <img width={150} src={aegImage} />
          </div>
        </div>

        <div className="md:flex-1 md:px-16">
          <h2 className="leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
            AEG 370W Mono
          </h2>

          <div className="flex md:items-center md:space-x-4 my-4 flex-col md:flex-row">
            <div className="flex py-2">
              <span className="mr-1 mt-1">€</span>
              <span className="font-bold text-emerald-700 text-3xl">950</span>
            </div>

            <div className="flex-1">
              <p className="text-emerald-700 text-sm md:text-md">
                Everything included!
              </p>
            </div>
          </div>

          <p className="text-gray-500">
            <ul className="space-y-4 text-sm md:text-md">
              <li>Installation</li>
              <li>Microinverters IQ 7+</li>
              <li>Fuse Box</li>
              <li>Cables</li>
              <li>Construction</li>
              <li>20-year product warranty</li>
              <li>25-year power warranty</li>
              <li>
                Integrated production lines contribute to an excellent
                price/quality ratio
              </li>
            </ul>
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:divide-x-2 pb-8 border-b-2 md:border-b-0 md:pb-0">
        <div className="md:flex-1 mb-4 md:mb-0">
          <div className="flex items-center justify-center">
            <img width={350} src={jinkoImage} />
          </div>
        </div>

        <div className="md:flex-1 md:px-16">
          <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
            JINKO 370W Mono
          </h2>

          <div className="flex md:items-center md:space-x-4 my-4 flex-col md:flex-row">
            <div className="flex py-2">
              <span className="mr-1 mt-1">€</span>
              <span className="font-bold text-emerald-700 text-3xl">750</span>
            </div>

            <div className="flex-1">
              <p className="text-emerald-700 text-sm md:text-md">
                Everything included!
              </p>
            </div>
          </div>

          <p className="text-gray-500">
            <ul className="space-y-4 text-sm md:text-md">
              <li>Installation</li>
              <li>Microinverters IQ 7+</li>
              <li>Fuse Box</li>
              <li>Cables</li>
              <li>Construction</li>
              <li>Jinko is high in the Bloomberg Tier 1 list</li>
              <li>25-year product warranty</li>
              <li>30-year power warranty</li>
              <li>
                These panels have lower degradation compared to P-type panels.
              </li>
            </ul>
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:divide-x-2">
        <div className="md:flex-1 mb-4 md:mb-0">
          <div className="flex items-center justify-center">
            <img width={250} src={iq7plus} />
          </div>
        </div>

        <div className="md:flex-1 md:px-16">
          <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
            ENPHASE IQ7+
          </h2>

          <div className="flex md:items-center md:space-x-4 my-4 flex-col md:flex-row">
            <div className="flex py-2">
              <span className="font-bold text-emerald-700 text-3xl">Free</span>
            </div>

            <p className="flex-1 text-emerald-700 text-sm md:text-md">
              This is included with all products!
            </p>
          </div>

          <p className="text-gray-500 text-sm md:text-md">
            Microinverters IQ 7, IQ 7+ and IQ 7X exceed the standards of
            reliability and ruggedness of previous generations of
            microinverters. They have already been tested for more than one
            million hours - which is why Enphase can offer an industry-leading
            warranty of up to 25 years.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Products;
