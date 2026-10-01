// Note: the Feb 2026 screenshots use U+202F (narrow no-break space) before "AM" in their filenames.
// Shared web copies live in /public/photos/<original folder>/<original filename>.
export function photo(folder: string, file: string) {
  return `/photos/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`;
}

export const P = {
  aerialPlots: photo("Archive", "Screenshot 2026-09-24 163545.jpg"),
  aerialCampus: photo("Archive", "Screenshot 2026-09-24 163505.jpg"),
  aerialWide: photo("Archive", "Screenshot 2026-09-24 164012.jpg"),
  greenhouseRoofs: photo("Archive", "Screenshot 2026-09-24 163812.jpg"),
  fieldSpecialist: photo("Archive", "Screenshot 2026-09-24 163612.jpg"),
  droneTop: photo("Archive", "Screenshot 2026-09-24 163836.jpg"),
  droneSky: photo("Archive", "Screenshot 2026-09-24 163857.jpg"),
  soilProbe: photo("Archive", "Screenshot 2026-09-24 163925.jpg"),
  academy: photo("Archive", "Screenshot 2026-09-24 164221.jpg"),

  canopy: photo("Professional Facility Photos (1)", "PA__1065.jpg"),
  atrium: photo("Professional Facility Photos (1)", "PA__1211-Edit-Edit.jpg"),
  labPots: photo("Professional Facility Photos (1)", "PA__1272.jpg"),
  labSeed: photo("Professional Facility Photos (1)", "PA__1288.jpg"),
  labWorking: photo("Professional Facility Photos (1)", "PA__1405.jpg"),
  microscope: photo("Professional Facility Photos (1)", "PA__1421.jpg"),
  phenotyping: photo("Professional Facility Photos (1)", "PA__1464.jpg"),
  hydroTomato: photo("Professional Facility Photos (1)", "PA__1483.jpg"),

  greenhouseLeafy: photo("General MarCom Photos (1)", "DSC04723 (1).jpg"),
  flask: photo("General MarCom Photos (1)", "PA_L0008-Edit (1).jpg"),
  growthChamber: photo("General MarCom Photos (1)", "PA__1526.jpg"),
  tomatoAisle: photo("General MarCom Photos (1)", "SAM_9200.jpg"),
  canopy2: photo("General MarCom Photos (1)", "SAM_8874.jpg"),
  blueberry: photo("General MarCom Photos (1)", "Screenshot 2026-02-20 at 10.58.36\u202FAM copy.jpg"),
  inauguration: photo("General MarCom Photos (1)", "edited-131 (1).jpg"),
  tour: photo("General MarCom Photos (1)", "Screenshot 2026-02-20 at 11.01.41\u202FAM copy.jpg"),

  awardsStage: photo("Awards", "FAH_4508.JPG"),
  awardsWinners: photo("Awards", "FAH_4533.JPG"),
  pitchRoom: photo("Final Pitches", "FRH_1604.JPG"),
  pitchWinners: photo("Final Pitches", "FRH_1703.JPG"),
};
