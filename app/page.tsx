export default function Home() {
  const defaultImage = "https://www-s3-live.kent.edu/s3fs-root/s3fs-public/styles/profile_photo_internal/public/Default-Profile-Image_3.jpg";

  const participants = [
    { 
      name: "Peter Boyvalenkov", 
      affiliation: "Bulgarian Academy of Sciences",
      image: "https://i1.rgstatic.net/ii/profile.image/314279830458373-1451941558783_Q512/Peter-Boyvalenkov.jpg"
    },
    { 
      name: "Jose Carrillo", 
      affiliation: "University of Oxford",
      image: "https://www.queens.ox.ac.uk/wp-content/uploads/2022/08/Jose-Carrillo-WK5A3594.jpg"
    },
    { 
      name: "Peter Dragnev", 
      affiliation: "Purdue University – Fort Wayne",
      image: "https://i1.rgstatic.net/ii/profile.image/729093783953415-1550840912312_Q512/Peter-Dragnev.jpg"
    },
    { 
      name: "Doug Hardin", 
      affiliation: "Vanderbilt University",
      image: defaultImage
    },
    { 
      name: "Xinpeng Huang", 
      affiliation: "Central South University",
      image: defaultImage
    },
    { 
      name: "Liudmyla Kryvonos", 
      affiliation: "",
      image: defaultImage
    },
    { 
      name: "Ryan Matzke", 
      affiliation: "Case Western",
      image: "https://artscimedia.case.edu/wp-content/uploads/2025/08/26093812/84d79e82-3e47-4151-bb65-3b156b82186e.jpg"
    },
    { 
      name: "Ed Saff", 
      affiliation: "Vanderbilt University",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Saff_edward.jpg"
    },
    { 
      name: "Raffaello Seri", 
      affiliation: "University of Insubria",
      image: "https://www.varesenews.it/photogallery_new/images/2026/04/raffaello-seri-universita-insubria-2068924.1024x768.jpg"
    },
    { 
      name: "Ruiwen Shu", 
      affiliation: "University of Georgia",
      image: "https://www.math.uga.edu/sites/default/files/styles/square_400x400/public/IMG_1329.jpg"
    },
    { 
      name: "Maya Stoyanova", 
      affiliation: "Sofia University “St. Kliment Ohridski”",
      image: "https://www.uni-sofia.bg/var/ezwebin_site/storage/images/media/images/02_openning_prof_maya_stoyanova/2168313-1-bul-BG/02_openning_prof_maya_stoyanova.jpg"
    },
    { 
      name: "Eitan Tadmor", 
      affiliation: "University of Maryland",
      image: "https://www.math.umd.edu/~tadmor/images/Tadmor7.jpg"
    },
    { 
      name: "Robert Womersley", 
      affiliation: "University of New South Wales",
      image: "https://api.research.unsw.edu.au/sites/default/files/images/profile/rob_womersley.jpg"
    }
  ];

  return (
    <div className="space-y-16">
      
      {/* HEADER */}
      <header id="home" className="border-b border-gray-300 pb-8 text-center md:text-left">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">
          Vanderbilt Workshop
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
          Energy and Polarization Problems <br />
          in Mathematics and Statistics, part I
        </h1>
        <div className="text-lg text-gray-600 font-medium space-y-1">
          <p>August 16 (arrival day) – 19, 2026</p>
          <p>Vanderbilt University, Nashville, Tennessee</p>
        </div>
      </header>

      {/* DESCRIPTION */}
      <section id="description">
        <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-blue-600 pb-2 mb-6 inline-block">
          Description
        </h2>
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>
            The workshop aims to bring together researchers studying two measures of equidistribution, energy and polarisation, that received comparatively less attention than measures of separation and covering.
          </p>
          <p>
            Energy minimization problems, both discrete and continuous, arise naturally in many areas of mathematics and science: discrete geometry, mathematical physics, approximation theory, flocking behavior, statistical mechanics, coding theory, etc. Polarization problems (also known as Chebyshev constants) are related max-min problems for potentials.
          </p>
          <p>
            A number of interesting and unexpected phenomena in both energy minimization and polarization have been studied recently: universal optimality, discretization of minimizers, condensation and phase transitions, to name just a few. It turns out that the behavior of such minimizers is much more subtle than one would naturally expect.
          </p>
          <p>
            The aim of this mini-workshop is to bring together a multifaceted group of researchers working in potential theory, approximation, gradient flows, point configurations, lattices, and partial differential equations who have recently made important contributions to energy minimization and polarization problems to report on their work and to collaborate in trying to resolve some of the fundamental questions in the field.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-600 p-5 mt-8 rounded-r-md">
            <p className="text-blue-900 font-medium">
              <strong>Looking ahead:</strong> "Energy and Polarization Problems in Mathematics and Statistics, part II" will be jointly hosted by the University of Insubria and Vanderbilt University in 2027 in either Como or Varese, Italy.
            </p>
          </div>
        </div>
      </section>

      {/* PARTICIPANTS */}
      <section id="participants">
        <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-blue-600 pb-2 mb-8 inline-block">
          Partial Listing of Participants
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          {participants.map((p, idx) => (
            <div key={idx} className="bg-white p-5 border border-gray-200 rounded-lg shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 shrink-0 rounded-full overflow-hidden border-2 border-gray-100 bg-gray-50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={p.image} 
                  alt={`Photo of ${p.name}`} 
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="font-bold text-[17px] text-blue-800 leading-tight mb-1">{p.name}</h3>
                {p.affiliation && <p className="text-sm text-gray-500 leading-snug">{p.affiliation}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VENUE & LINKS */}
      <section id="venue">
        <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-blue-600 pb-2 mb-6 inline-block">
          Venue & Useful Links
        </h2>
        <div className="text-gray-700 space-y-6">
          <p>
            The workshop will be held at <strong>Vanderbilt University</strong>, located in Nashville, Tennessee. 
          </p>
          
          <div className="bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden">
            <div className="bg-slate-50 px-4 py-3 border-b border-gray-200">
              <h3 className="font-semibold text-slate-800">Travel & Campus Resources</h3>
            </div>
            <ul className="divide-y divide-gray-200">
              <li className="px-4 py-3 hover:bg-gray-50 transition-colors">
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  <span className="mr-3 text-lg">✈️</span> Airport Transportation
                </a>
              </li>
              <li className="px-4 py-3 hover:bg-gray-50 transition-colors">
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  <span className="mr-3 text-lg">📱</span> Campus Map app for your mobile phone
                </a>
                <p className="text-sm text-gray-500 mt-1 ml-8">Install the app, select “Vanderbilt University” from a drop-down list, and then whichever building you need.</p>
              </li>
              <li className="px-4 py-3 hover:bg-gray-50 transition-colors">
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  <span className="mr-3 text-lg">🗺️</span> Campus Map
                </a>
              </li>
              <li className="px-4 py-3 hover:bg-gray-50 transition-colors">
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  <span className="mr-3 text-lg">📍</span> Directions to VU
                </a>
              </li>
              <li className="px-4 py-3 hover:bg-gray-50 transition-colors">
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  <span className="mr-3 text-lg">🚗</span> Visitor Parking at Vanderbilt and parking map
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}