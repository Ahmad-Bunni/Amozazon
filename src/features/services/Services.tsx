import { NavLink } from 'react-router-dom';
import cleaning from '/images/cleaning.jpg';
import repair from '/images/repair.jpg';

function Services() {
  return (
    <div className="container mx-auto p-24 space-y-16">
      <div className="flex flex-col">
        <div className="md:flex-1 mb-4">
          <div className="flex justify-center">
            <img className="rounded-lg" width={800} src={cleaning} />
          </div>
        </div>

        <div className="md:flex-1 space-y-3">
          <h2 className="leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
            Cleaning and Maintainance
          </h2>

          <p className="text-xs lg:text-lg">
            It is recommended by most solar experts that you give your panels a
            thorough cleaning at least once a year. An annual clean up has been
            found to improve energy output by as much as 12% when compared to
            panels that were only cleaned by rainfall. We offer cleaning and
            inspection of your solar panels at competative price. This can done
            once or twice a year.
          </p>

          <p className="font-semibold text-xs md:text-md lg:text-lg">
            For more information{' '}
            <NavLink
              className="text-xs md:text-md lg:text-lg text-emerald-900 hover:underline "
              to={'/quote'}
            >
              Request Quote
            </NavLink>
          </p>
        </div>
      </div>

      <div className="flex flex-col ">
        <div className="md:flex-1 mb-4">
          <div className="flex justify-center">
            <img className="rounded-lg" width={400} src={repair} />
          </div>
        </div>

        <div className="md:flex-1 space-y-3">
          <h2 className="leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
            Repair and Replacement
          </h2>

          <p className="text-xs lg:text-lg">
            We offer a quick and efficient repair of all solar panel related
            issues. We can also help you move your old system or replace it with
            a new one.
          </p>

          <p className="font-semibold text-xs md:text-md lg:text-lg">
            For more information{' '}
            <NavLink
              className="text-xs md:text-md lg:text-lg text-emerald-900 hover:underline "
              to={'/quote'}
            >
              Request Quote
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
