import { Operation } from "@/types";

export const operations: Operation[] = [
  {
    id: "open-pit",
    titleKey: "openPit",
    descriptionKey: "openPitDesc",
    icon: "Mountain",
    stats: [
      { value: 405, suffix: " ha", labelKey: "depth" },
      { value: 1000, suffix: "+", labelKey: "annualOutput" },
      { value: 90, suffix: "%", labelKey: "efficiency" },
    ],
  },
  {
    id: "exploration",
    titleKey: "exploration",
    descriptionKey: "explorationDesc",
    icon: "Search",
    stats: [
      { value: 12, suffix: " sites", labelKey: "activeSites" },
      { value: 405, suffix: " ha", labelKey: "exploredArea" },
      { value: 34, suffix: "%", labelKey: "discoveryRate" },
    ],
  },
  {
    id: "processing",
    titleKey: "processing",
    descriptionKey: "processingDesc",
    icon: "Factory",
    stats: [
      { value: 10000, suffix: " t/d", labelKey: "capacity" },
      { value: 90, suffix: "%", labelKey: "recoveryRate" },
      { value: 2, suffix: " plants", labelKey: "facilities" },
    ],
  },
  {
    id: "gold-recovery",
    titleKey: "goldRecovery",
    descriptionKey: "goldRecoveryDesc",
    icon: "Gem",
    stats: [
      { value: 10, suffix: " g/t", labelKey: "purity" },
      { value: 90, suffix: "%", labelKey: "yearlyRecovery" },
      { value: 0.1, suffix: " g/t", labelKey: "processingTime" },
    ],
  },
];
