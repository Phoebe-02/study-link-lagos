// Each filter has a key, a label for the checkbox, and a test.
// The test answers: "does this spot pass this filter?" (true or false)
export const FILTERS = [
  {
    key: "freeWifi",
    label: "Free Wi-Fi",
    test: function (spot) { return spot.wifi === "free"; },
  },
  {
    key: "backupPower",
    label: "Backup power",
    test: function (spot) { return spot.power.hasBackup; },
  },
  {
    key: "quiet",
    label: "Quiet",
    test: function (spot) { return spot.environment === "Quiet"; },
  },
];
