// Shared web copies: /public/photos/<original folder>/<original filename> (BRAIN-owned, 2400px).
// The Feb 2026 MarCom screenshots have U+202F (narrow no-break space) before "AM" in their filenames.
export function photo(folder: string, file: string) {
  return `/photos/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`;
}

const ARCHIVE = "Archive";
const FACILITY = "Professional Facility Photos (1)";
const MARCOM = "General MarCom Photos (1)";
const TEAM = "iO Team Headshot & Bios";

export const P = {
  aerialWide: photo(ARCHIVE, "Screenshot 2026-09-24 164012.jpg"),
  aerialPlots: photo(ARCHIVE, "Screenshot 2026-09-24 163545.jpg"),
  aerialCampus: photo(ARCHIVE, "Screenshot 2026-09-24 163505.jpg"),
  greenhouseRoofs: photo(ARCHIVE, "Screenshot 2026-09-24 163812.jpg"),
  fieldSpecialist: photo(ARCHIVE, "Screenshot 2026-09-24 163612.jpg"),
  droneTop: photo(ARCHIVE, "Screenshot 2026-09-24 163836.jpg"),
  soilProbe: photo(ARCHIVE, "Screenshot 2026-09-24 163925.jpg"),
  academy: photo(ARCHIVE, "Screenshot 2026-09-24 164221.jpg"),

  canopy: photo(FACILITY, "PA__1065.jpg"),
  atrium: photo(FACILITY, "PA__1211-Edit-Edit.jpg"),
  labPots: photo(FACILITY, "PA__1272.jpg"),
  labWorking: photo(FACILITY, "PA__1405.jpg"),
  microscope: photo(FACILITY, "PA__1421.jpg"),
  phenotyping: photo(FACILITY, "PA__1464.jpg"),
  hydroTomato: photo(FACILITY, "PA__1483.jpg"),
  growthRoom: photo(FACILITY, "PA__1488.jpg"),

  greenhouseLeafy: photo(MARCOM, "DSC04723 (1).jpg"),
  flask: photo(MARCOM, "PA_L0008-Edit (1).jpg"),
  soilSample: photo(MARCOM, "PA__1420.jpg"),
  tomatoAisle: photo(MARCOM, "SAM_9200.jpg"),
  blueberry: photo(MARCOM, "Screenshot 2026-02-20 at 10.58.36\u202FAM copy.jpg"),
  tour: photo(MARCOM, "Screenshot 2026-02-20 at 11.01.41\u202FAM copy.jpg"),
  inauguration: photo(MARCOM, "edited-131 (1).jpg"),

  awardsStage: photo("Awards", "FAH_4508.JPG"),
  awardsWinners: photo("Awards", "FAH_4533.JPG"),
  pitchRoom: photo("Final Pitches", "FRH_1604.JPG"),
  pitchWinners: photo("Final Pitches", "FRH_1703.JPG"),

  // Always the full path: Shamal-*.jpg also exists in Sagar/ (different person). See content/team.md.
  ceo: photo(TEAM, "Shamal/Shamal-2.jpg"),
};
