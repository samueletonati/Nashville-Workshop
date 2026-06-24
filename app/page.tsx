import Image from "next/image";

export default function Home() {
  const participants = [
    { name: "Peter Boyvalenkov", affiliation: "Bulgarian Academy of Sciences" },
    { name: "Jose Carrillo", affiliation: "University of Oxford" },
    { name: "Peter Dragnev", affiliation: "Purdue University – Fort Wayne" },
    { name: "Doug Hardin", affiliation: "Vanderbilt University" },
    { name: "Xinpeng Huang", affiliation: "Central South University" },
    { name: "Liudmyla Kryvonos", affiliation: "" },
    { name: "Ryan Matzke", affiliation: "Case Western" },
    { name: "Ed Saff", affiliation: "Vanderbilt University" },
    { name: "Raffaello Seri", affiliation: "University of Insubria" },
    { name: "Ruiwen Shu", affiliation: "University of Georgia" },
    { name: "Maya Stoyanova", affiliation: "Sofia University \u201cSt. Kliment Ohridski\u201d" },
    { name: "Eitan Tadmor", affiliation: "University of Maryland" },
    { name: "Robert Womersley", affiliation: "University of New South Wales" }
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
          <p>August 16 – 19, 2026</p>
          <p>Vanderbilt University, Nashville, Tennessee</p>
        </div>
        <div className="mt-8">
          <Image
            src="/images/vanderbilt.jpg"
            alt="Vanderbilt University"
            width={1200}
            height={500}
            className="w-full rounded-md object-cover max-h-80"
            priority
          />
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
              <strong>Looking ahead:</strong> &ldquo;Energy and Polarization Problems in Mathematics and Statistics, part II&rdquo; will be jointly hosted by the University of Insubria and Vanderbilt University in 2027 in either Como or Varese, Italy.
            </p>
          </div>
        </div>
      </section>

      {/* PARTICIPANTS */}
      <section id="participants">
        <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-blue-600 pb-2 mb-6 inline-block">
          Partial Listing of Participants
        </h2>
        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          {participants.map((p, idx) => (
            <div key={idx} className="bg-gray-50 p-4 border border-gray-200 rounded">
              <h3 className="font-bold text-lg text-blue-800">{p.name}</h3>
              {p.affiliation && <p className="text-sm text-gray-600">{p.affiliation}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* VENUE & LINKS */}
      <section id="venue">
        <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-blue-600 pb-2 mb-6 inline-block">
          Venue &amp; Useful Links
        </h2>
        <div className="text-gray-700 space-y-8">
          <p>
            The workshop will be held at <strong>Vanderbilt University</strong>, located in Nashville, Tennessee.
          </p>

          {/* International Travelers */}
          <div className="bg-amber-50 border border-amber-200 rounded-md p-5">
            <h3 className="font-semibold text-slate-800 mb-3">🌍 For International Travelers</h3>
            <p className="mb-3 text-sm">To help facilitate a smooth entry into the United States, we recommend that you carry, along with the required documents, printed copies of the following:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Proof of accommodation (e.g., hotel reservation confirmation)</li>
              <li>Your return flight itinerary</li>
              <li>The invitation letter from the conference organizers</li>
            </ul>
          </div>

          {/* Domestic Travelers */}
          <div className="bg-blue-50 border border-blue-200 rounded-md p-5">
            <h3 className="font-semibold text-slate-800 mb-2">✈️ For Domestic Participants Flying Within the U.S.</h3>
            <p className="text-sm">Please note that the TSA now requires a state ID (e.g., driver&rsquo;s license) that is <strong>REAL ID compliant</strong> or an alternative form of ID such as a passport as valid identification at airports.</p>
          </div>

          {/* Useful Links */}
          <div className="bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden">
            <div className="bg-slate-50 px-4 py-3 border-b border-gray-200">
              <h3 className="font-semibold text-slate-800">Travel &amp; Campus Resources</h3>
            </div>
            <ul className="divide-y divide-gray-200">
              <li className="px-4 py-3 hover:bg-gray-50 transition-colors">
                <a href="https://flynashville.com/ground-transportation" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  <span className="mr-3">✈️</span> Airport Transportation
                </a>
              </li>
              <li className="px-4 py-3 hover:bg-gray-50 transition-colors">
                <a href="https://www.campus-maps.com/vanderbilt-university/wilson-hall/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  <span className="mr-3">📱</span> Campus Map app for your mobile phone
                </a>
                <p className="text-sm text-gray-500 mt-1 ml-8">Install the app, select &ldquo;Vanderbilt University&rdquo; from a drop-down list, and then whichever building you need.</p>
              </li>
              <li className="px-4 py-3 hover:bg-gray-50 transition-colors">
                <a href="https://www.vanderbilt.edu/map/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  <span className="mr-3">🗺️</span> Campus Map
                </a>
              </li>
              <li className="px-4 py-3 hover:bg-gray-50 transition-colors">
                <a href="https://www.vanderbilt.edu/generalcounsel/map/nashville-overview.php" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  <span className="mr-3">📍</span> Directions to VU
                </a>
              </li>
              <li className="px-4 py-3 hover:bg-gray-50 transition-colors">
                <a href="https://www.vanderbilt.edu/transportation-parking/parking/visitors/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  <span className="mr-3">🚗</span> Visitor Parking at Vanderbilt
                </a>
                {" "}and{" "}
                <a href="https://cdn.vanderbilt.edu/vu-wpfsx/wp-content/uploads/sites/33/2025/07/ParkingMap2025_2026_Compressed.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium ml-1">
                  parking map
                </a>
              </li>
            </ul>
          </div>

          {/* Letters of Invitation */}
          <div className="bg-gray-50 border border-gray-200 rounded-md p-5">
            <h3 className="font-semibold text-slate-800 mb-2">📩 Letters of Invitation</h3>
            <p className="text-sm">If you need an official letter of invitation, please write to{" "}
              <a href="mailto:doug.hardin@vanderbilt.edu" className="text-blue-600 hover:text-blue-800 font-medium">doug.hardin@vanderbilt.edu</a>
              {" "}or{" "}
              <a href="mailto:ed.saff@vanderbilt.edu" className="text-blue-600 hover:text-blue-800 font-medium">ed.saff@vanderbilt.edu</a>.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
