// ================
// utils/accessControl.js
// ================

export function checkCrystalMines(rankCVC, lokaPledged, kills, accesses) {
  if (parseInt(rankCVC, 10) <= 200 || parseInt(lokaPledged, 10) >= 2000 || parseInt(kills, 10) >= 120000000) {
    accesses.allowed.add("Crystal Mine Level 2");
  } else {
    accesses.denied.add("Crystal Mine Level 2");
  }
  if (parseInt(rankCVC, 10) <= 100 || parseInt(lokaPledged, 10) >= 5000 || parseInt(kills, 10) >= 300000000) {
    accesses.allowed.add("Crystal Mine Level 3");
  } else {
    accesses.denied.add("Crystal Mine Level 3");
  }
  if (parseInt(rankCVC, 10) <= 15 || parseInt(lokaPledged, 10) >= 50000 || parseInt(kills, 10) >= 650000000) {
    accesses.allowed.add("Crystal Mine Level 4/5");
  } else {
    accesses.denied.add("Crystal Mine Level 4/5");
  }
  return accesses;
}

export function checkDSAMines(rankCVC, lokaPledged, kills, accesses) {
  if (parseInt(rankCVC, 10) <= 3 || parseInt(lokaPledged, 10) >= 1000) {
    accesses.allowed.add("DSA Mine Level 3");
  } else {
    accesses.denied.add("DSA Mine Level 3");
  }
  if (parseInt(rankCVC, 10) <= 3 || parseInt(lokaPledged, 10) >= 10000) {
    accesses.allowed.add("DSA Mine Level 4");
  } else {
    accesses.denied.add("DSA Mine Level 4");
  }
  if (parseInt(rankCVC, 10) <= 3 || parseInt(lokaPledged, 10) >= 100000) {
    accesses.allowed.add("DSA Mine Level 5");
  } else {
    accesses.denied.add("DSA Mine Level 5");
  }
  return accesses;
}
