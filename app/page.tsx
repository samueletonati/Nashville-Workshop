"use client";

import { useState } from "react";

// ---------------------------------------------------------------------------
// PARTICIPANTS
// Sorted alphabetically by surname.
// `website` is optional: if present, the whole card becomes a link.
// `image` is optional: if missing or broken, an initials avatar is shown.
// ---------------------------------------------------------------------------
const participants = [
  {
    name: "Peter Boyvalenkov",
    affiliation: "Bulgarian Academy of Sciences",
    website: "https://math.bas.bg/profiles/boyvalenkov-peter-director/?lang=en",
    image: "https://i1.rgstatic.net/ii/profile.image/314279830458373-1451941558783_Q512/Peter-Boyvalenkov.jpg"
  },
  {
    name: "José A. Carrillo",
    affiliation: "University of Oxford",
    website: "https://carrilloja.org",
    image: "https://www.queens.ox.ac.uk/wp-content/uploads/2022/08/Jose-Carrillo-WK5A3594.jpg"
  },
  {
    name: "Peter Dragnev",
    affiliation: "Purdue University – Fort Wayne",
    website: "https://users.pfw.edu/dragnevp/",
    image: "https://i1.rgstatic.net/ii/profile.image/729093783953415-1550840912312_Q512/Peter-Dragnev.jpg"
  },
  {
    name: "Christina Giannitsi",
    affiliation: "Virginia Tech",
    website: "https://sites.google.com/view/christina-giannitsi/home",
    image: "/images/christina.jpg"
  },
  {
    name: "Doug Hardin",
    affiliation: "Vanderbilt University",
    website: "https://my.vanderbilt.edu/doughardin/",
    image: "https://as.vanderbilt.edu/photos/math/people/image.php/doug-hardin.jpg?width=220&image=/photos/math/people/doug-hardin.jpg"
  },
  {
    name: "Yanghong Huang",
    affiliation: "The Manchester University",
    website: "https://personalpages.manchester.ac.uk/staff/yanghong.huang/",
    image: "https://personalpages.manchester.ac.uk/staff/yanghong.huang/img/yhpic.jpg"
  },
  {
    name: "Liudmyla Kryvonos",
    affiliation: "University of North Florida",
    website: "https://webapps.unf.edu/faculty/bio/N01654015/liudmyla-kryvonos",
    image: "/images/liudmyla.jpg"
  },
  {
    name: "Ryan Matzke",
    affiliation: "Case Western Reserve University",
    website: "https://www.ryanmatzke.com",
    image: "https://artscimedia.case.edu/wp-content/uploads/2025/08/26093812/84d79e82-3e47-4151-bb65-3b156b82186e.jpg"
  },
  {
    name: "Dirk Nuyens",
    affiliation: "Katholieke Universiteit Leuven",
    website: "https://people.cs.kuleuven.be/~dirk.nuyens/",
    // TODO: save the photo from https://people.cs.kuleuven.be/~dirk.nuyens/cv/
    // into public/images/nuyens.jpg — until then the initials avatar is shown.
    image: "/images/dirk.jpg"
  },
  {
    name: "Ed Saff",
    affiliation: "Vanderbilt University",
    website: "https://my.vanderbilt.edu/edsaff/",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Saff_edward.jpg"
  },
  {
    name: "Raffaello Seri",
    affiliation: "University of Insubria",
    website: "https://rseri.me",
    image: "https://www.varesenews.it/photogallery_new/images/2026/04/raffaello-seri-universita-insubria-2068924.1024x768.jpg"
  },
  {
    name: "Ruiwen Shu",
    affiliation: "University of Georgia",
    website: "https://shuruiwen.com",
    image: "https://www.math.uga.edu/sites/default/files/styles/square_400x400/public/IMG_1329.jpg"
  },
  {
    name: "Maya Stoyanova",
    affiliation: "Sofia University “St. Kliment Ohridski”",
    website: "https://www.fmi.uni-sofia.bg/en/faculty/maya-miteva-stoyanova",
    image: "https://www.uni-sofia.bg/var/ezwebin_site/storage/images/media/images/02_openning_prof_maya_stoyanova/2168313-1-bul-BG/02_openning_prof_maya_stoyanova.jpg"
  },
  {
    name: "Eitan Tadmor",
    affiliation: "University of Maryland",
    website: "https://www.math.umd.edu/~tadmor/",
    image: "https://www.math.umd.edu/~tadmor/images/Tadmor7.jpg"
  },
  {
    name: "Robert Womersley",
    affiliation: "University of New South Wales",
    website: "https://www.unsw.edu.au/staff/robert-womersley",
    // This is the same URL UNSW's own profile page uses. If it stops loading,
    // the initials fallback takes over; a self-hosted copy in public/images/
    // would be the permanent fix.
    image: "https://api.research.unsw.edu.au/sites/default/files/images/profile/rob_womersley.jpg"
  }
];

// ---------------------------------------------------------------------------
// SCHEDULE
// Fill `sessions` for each day once Doug's schedule is confirmed.
// While every day is empty, the "being finalized" notice is shown instead.
// Example entry:
//   { time: "09:00 – 09:50", speaker: "Ed Saff", title: "Talk title here" }
//   { time: "10:30 – 11:00", title: "Coffee break", break: true }
// ---------------------------------------------------------------------------
const schedule = [
  { day: "Sunday", date: "August 16, 2026", sessions: [] },
  { day: "Monday", date: "August 17, 2026", sessions: [] },
  { day: "Tuesday", date: "August 18, 2026", sessions: [] },
  { day: "Wednesday", date: "August 19, 2026", sessions: [] }
] as {
  day: string;
  date: string;
  sessions: { time: string; speaker?: string; title: string; break?: boolean }[];
}[];

// Optional: link to a downloadable schedule (e.g. "/schedule.pdf").
// Leave as null to hide the download button.
const schedulePdf: string | null = null;

// ---------------------------------------------------------------------------
// PRESS COVERAGE
// Add entries as coverage appears. While empty, a short placeholder is shown.
// Example entry:
//   {
//     outlet: "Università dell'Insubria",
//     title: "Headline of the article",
//     url: "https://...",
//     date: "September 2026",
//     language: "IT"        // optional
//   }
// ---------------------------------------------------------------------------
const pressCoverage = [] as {
  outlet: string;
  title: string;
  url: string;
  date: string;
  language?: string;
}[];

// ---------------------------------------------------------------------------
// Avatar: shows the photo, falling back to initials if the image fails to load.
// ---------------------------------------------------------------------------
function Avatar({ name, src }: { name: string; src?: string }) {
  const [failed, setFailed] = useState(false);

  const initials = name
    .split(" ")
    .filter((w) => /[A-Za-zÀ-ÿ]/.test(w[0]))
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const showFallback = !src || failed;

  return (
    <div className="w-16 h-16 shrink-0 rounded-full overflow-hidden border-2 border-gray-100 bg-gray-50 group-hover:border-blue-100 transition-colors">
      {showFallback ? (
        <div
          className="w-full h-full flex items-center justify-center bg-blue-50 text-blue-700 font-bold text-lg select-none"
          aria-label={`${name} (no photo available)`}
        >
          {initials}
        </div>
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={src}
          alt={`Photo of ${name}`}
          className="w-full h-full object-cover object-top"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Participant card. Renders as a link when a website is available.
// ---------------------------------------------------------------------------
function ParticipantCard({
  participant
}: {
  participant: { name: string; affiliation?: string; website?: string; image?: string };
}) {
  const { name, affiliation, website, image } = participant;

  const inner = (
    <>
      <Avatar name={name} src={image} />
      <div className="min-w-0">
        <h3 className="font-bold text-[17px] text-slate-900 leading-tight mb-1 group-hover:text-blue-700 transition-colors">
          {name}
          {website && (
            <span
              aria-hidden="true"
              className="ml-1.5 inline-block text-xs text-gray-300 group-hover:text-blue-500 transition-colors align-middle"
            >
              ↗
            </span>
          )}
        </h3>
        {affiliation && <p className="text-sm text-gray-500 leading-snug">{affiliation}</p>}
      </div>
    </>
  );

  const shared =
    "bg-white p-5 border border-gray-200 rounded-xl shadow-sm flex items-center gap-4 transition-all group";

  if (!website) {
    return <div className={shared}>{inner}</div>;
  }

  return (
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      title={`${name} — personal website`}
      className={`${shared} hover:shadow-md hover:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2`}
    >
      {inner}
    </a>
  );
}

export default function Home() {
  const hasSchedule = schedule.some((d) => d.sessions.length > 0);
  const hasPress = pressCoverage.length > 0;

  return (
    <div className="space-y-16">

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

        {/* L'immagine principale */}
        <div className="mt-10 aspect-video relative rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/vanderbilt.jpg"
            alt="Beautiful view of Vanderbilt University Campus"
            className="w-full h-full object-cover"
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
            The workshop will bring together researchers studying problems related to the equidistribution of point configurations, namely energy and polarization, which can be viewed as generalizations of the basic properties of separation and covering.
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

      {/* PROGRAM */}
      <section id="program" className="scroll-mt-24">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-blue-600 pb-2 inline-block">
            Program
          </h2>
          {schedulePdf && (
            <a
              href={schedulePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              <span aria-hidden="true">⬇</span> Download schedule (PDF)
            </a>
          )}
        </div>

        {hasSchedule ? (
          <div className="space-y-6">
            {schedule
              .filter((d) => d.sessions.length > 0)
              .map((d) => (
                <div
                  key={d.date}
                  className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
                >
                  <div className="bg-slate-50 px-6 py-4 border-b border-gray-200 flex flex-wrap items-baseline gap-x-3">
                    <h3 className="font-bold text-slate-800">{d.day}</h3>
                    <span className="text-sm text-gray-500">{d.date}</span>
                  </div>
                  <ul className="divide-y divide-gray-100">
                    {d.sessions.map((s, i) => (
                      <li
                        key={i}
                        className={`px-6 py-4 flex flex-col sm:flex-row sm:gap-6 ${
                          s.break ? "bg-slate-50/60" : ""
                        }`}
                      >
                        <span className="text-sm font-mono text-blue-700 shrink-0 sm:w-36 mb-1 sm:mb-0 tabular-nums">
                          {s.time}
                        </span>
                        <div className="min-w-0">
                          {s.speaker && (
                            <p className="font-semibold text-slate-900 leading-tight">{s.speaker}</p>
                          )}
                          <p
                            className={
                              s.break
                                ? "text-gray-500 italic text-sm"
                                : "text-gray-700 leading-snug"
                            }
                          >
                            {s.title}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            <p className="text-sm text-gray-500 italic">
              The program is subject to change. Please check back for updates.
            </p>
          </div>
        ) : (
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center shadow-sm">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span aria-hidden="true" className="text-2xl">🗓️</span>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Schedule of Talks</h3>
            <p className="text-gray-600 max-w-lg mx-auto">
              The detailed schedule of talks and events is currently being finalized. Please check back closer to the workshop dates for the full program.
            </p>
          </div>
        )}
      </section>

      {/* PARTICIPANTS */}
      <section id="participants" className="scroll-mt-24">
        <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-blue-600 pb-2 mb-8 inline-block">
          Partial Listing of Participants
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          {participants.map((p) => (
            <ParticipantCard key={p.name} participant={p} />
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-6 italic">
          Click a participant to visit their personal or institutional page.
        </p>
      </section>

      {/* PRESS COVERAGE */}
      <section id="press" className="scroll-mt-24">
        <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-blue-600 pb-2 mb-6 inline-block">
          Press Coverage
        </h2>

        {hasPress ? (
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <ul className="divide-y divide-gray-100">
              {pressCoverage.map((item, i) => (
                <li key={i} className="hover:bg-slate-50 transition-colors">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-6 py-5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-inset"
                  >
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1.5">
                      <span className="text-xs font-semibold uppercase tracking-wide text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                        {item.outlet}
                      </span>
                      <span className="text-xs text-gray-500">{item.date}</span>
                      {item.language && (
                        <span className="text-xs text-gray-400 border border-gray-200 px-1.5 rounded">
                          {item.language}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-800 font-medium leading-snug hover:text-blue-700 transition-colors">
                      {item.title}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center shadow-sm">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span aria-hidden="true" className="text-2xl">📰</span>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">In the News</h3>
            <p className="text-gray-600 max-w-lg mx-auto">
              Articles and announcements about the workshop will be collected here as they appear.
            </p>
          </div>
        )}
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
