import Image from "next/image";

// Moved data outside the component to prevent unnecessary re-renders
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

export default function Home() {
  return (
    <div className="space-y-20"> {/* Increased main spacing slightly for better breathing room */}
      
      {/* HEADER */}
      <header id="home" className="border-b border-gray-300 pb-10 text-center md:text-left pt-4">
        <h3 className="text-xl font-semibold text-blue-700 mb-2 tracking-tight">
          Vanderbilt Workshop
        </h3>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
          Energy and Polarization Problems <br className="hidden md:block" />
          in Mathematics and Statistics, <span className="text-blue-700">part I</span>
        </h1>
        <div className="text-lg text-gray-600 font-medium space-y-1 flex flex-col md:flex-row md:gap-6 md:space-y-0">
          <p className="flex items-center justify-center md:justify-start gap-2">
            <span aria-hidden="true">📅</span> August 16 – 19, 2026
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <span aria-hidden="true">📍</span> Vanderbilt University, TN
          </p>
        </div>
        <div className="mt-10 aspect-video relative rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <Image
            src="/images/vanderbilt.jpg"
            alt="Beautiful view of Vanderbilt University Campus"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
      </header>

      {/* DESCRIPTION */}
      <section id="description" className="scroll-mt-24">
        <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-blue-600 pb-2 mb-6 inline-block">
          Description
        </h2>
        <div className="text-gray-700 leading-relaxed space-y-5 text-lg">
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
          
          <div className="bg-blue-50/80 border-l-4 border-blue-600 p-6 mt-8 rounded-r-lg shadow-sm">
            <p className="text-blue-900 font-medium">
              <strong className="text-blue-800 uppercase tracking-wide text-sm mr-2">Looking ahead:</strong> 
              &ldquo;Energy and Polarization Problems in Mathematics and Statistics, part II&rdquo; will be jointly hosted by the University of Insubria and Vanderbilt University in 2027 in either Como or Varese, Italy.
            </p>
          </div>
        </div>
      </section>

      {/* PARTICIPANTS */}
      <section id="participants" className="scroll-mt-24">
        <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-blue-600 pb-2 mb-8 inline-block">
          Participants
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          {participants.map((p, idx) => (
            <div key={idx} className="bg-white p-5 border border-gray-200 rounded-xl shadow-sm flex items-center gap-4 hover:shadow-md hover:border-blue-200 transition-all group">
              <div className="w-16 h-16 shrink-0 rounded-full overflow-hidden border-2 border-gray-100 bg-gray-50 group-hover:border-blue-100 transition-colors">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={p.image} 
                  alt={`Photo of ${p.name}`} 
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="font-bold text-[17px] text-slate-900 leading-tight mb-1 group-hover:text-blue-700 transition-colors">{p.name}</h3>
                {p.affiliation && <p className="text-sm text-gray-500 leading-snug">{p.affiliation}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VENUE & LINKS */}
      <section id="venue" className="scroll-mt-24">
        <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-blue-600 pb-2 mb-6 inline-block">
          Venue &amp; Useful Links
        </h2>
        <div className="text-gray-700 space-y-8">
          <p className="text-lg">
            The workshop will be held at <strong>Vanderbilt University</strong>, located in Nashville, Tennessee.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* International Travelers */}
            <div className="bg-amber-50/50 border border-amber-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                <span aria-hidden="true">🌍</span> For International Travelers
              </h3>
              <p className="mb-4 text-sm leading-relaxed">To help facilitate a smooth entry into the United States, we recommend that you carry, along with the required documents, printed copies of the following:</p>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 ml-1">
                <li>Proof of accommodation (e.g., hotel reservation)</li>
                <li>Your return flight itinerary</li>
                <li>The invitation letter from organizers</li>
              </ul>
            </div>

            {/* Domestic Travelers & Letters */}
            <div className="space-y-6">
              <div className="bg-blue-50/50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <span aria-hidden="true">✈️</span> Domestic Participants
                </h3>
                <p className="text-sm leading-relaxed">Please note that the TSA now requires a state ID (e.g., driver&rsquo;s license) that is <strong>REAL ID compliant</strong> or an alternative form of ID such as a passport as valid identification at airports.</p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                  <span aria-hidden="true">📩</span> Letters of Invitation
                </h3>
                <p className="text-sm leading-relaxed">If you need an official letter of invitation, please write to{" "}
                  <a href="mailto:doug.hardin@vanderbilt.edu" className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-blue-200 underline-offset-2">Doug Hardin</a>
                  {" "}or{" "}
                  <a href="mailto:ed.saff@vanderbilt.edu" className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-blue-200 underline-offset-2">Ed Saff</a>.
                </p>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mt-8">
            <div className="bg-slate-50 px-6 py-4 border-b border-gray-200">
              <h3 className="font-bold text-slate-800">Travel &amp; Campus Resources</h3>
            </div>
            <ul className="divide-y divide-gray-100">
              <li className="px-6 py-4 hover:bg-slate-50 transition-colors">
                <a href="https://flynashville.com/ground-transportation" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  <span aria-hidden="true" className="mr-3 text-lg">🚕</span> Airport Transportation
                </a>
              </li>
              <li className="px-6 py-4 hover:bg-slate-50 transition-colors">
                <a href="https://www.campus-maps.com/vanderbilt-university/wilson-hall/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  <span aria-hidden="true" className="mr-3 text-lg">📱</span> Campus Map App
                </a>
                <p className="text-sm text-gray-500 mt-1.5 ml-8 leading-relaxed">Install the app, select &ldquo;Vanderbilt University&rdquo; from a drop-down list, and then whichever building you need.</p>
              </li>
              <li className="px-6 py-4 hover:bg-slate-50 transition-colors">
                <a href="https://www.vanderbilt.edu/map/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  <span aria-hidden="true" className="mr-3 text-lg">🗺️</span> Interactive Campus Map
                </a>
              </li>
              <li className="px-6 py-4 hover:bg-slate-50 transition-colors">
                <a href="https://www.vanderbilt.edu/generalcounsel/map/nashville-overview.php" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  <span aria-hidden="true" className="mr-3 text-lg">📍</span> Directions to VU
                </a>
              </li>
              <li className="px-6 py-4 hover:bg-slate-50 transition-colors">
                <div className="flex items-center">
                  <span aria-hidden="true" className="mr-3 text-lg">🚗</span> 
                  <span className="text-gray-700 font-medium">
                    <a href="https://www.vanderbilt.edu/transportation-parking/parking/visitors/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Visitor Parking</a>
                    {" "}and{" "}
                    <a href="https://cdn.vanderbilt.edu/vu-wpfsx/wp-content/uploads/sites/33/2025/07/ParkingMap2025_2026_Compressed.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Parking Map (PDF)</a>
                  </span>
                </div>
              </li>
            </ul>
          </div>
          
        </div>
      </section>

    </div>
  );
}