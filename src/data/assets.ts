import { MiningAsset } from "@/types";

export const miningAssets: MiningAsset[] = [
  {
    id: "eastern-region-mine",
    nameKey: "obuasiMine",
    type: "mine",
    lat: 6.1000,
    lng: -0.8500,
    descriptionKey: "obuasiMineDesc",
  },
  {
    id: "exploration-expansion",
    nameKey: "tarkwaMine",
    type: "exploration",
    lat: 6.2500,
    lng: -0.7500,
    descriptionKey: "tarkwaMineDesc",
  },
  {
    id: "lidar-survey-zone",
    nameKey: "ashantiExploration",
    type: "exploration",
    lat: 6.1500,
    lng: -0.9000,
    descriptionKey: "ashantiExplorationDesc",
  },
  {
    id: "processing-facility",
    nameKey: "presteaProcessing",
    type: "processing",
    lat: 6.0800,
    lng: -0.8300,
    descriptionKey: "presteaProcessingDesc",
  },
  {
    id: "resource-extension",
    nameKey: "westernExploration",
    type: "exploration",
    lat: 6.0200,
    lng: -0.9200,
    descriptionKey: "westernExplorationDesc",
  },
];
