import { SustainabilityItem } from "@/types";

export const sustainabilityItems: SustainabilityItem[] = [
  {
    id: "environment",
    icon: "TreePine",
    titleKey: "environment",
    descriptionKey: "environmentDesc",
    metric: "Zero mercury discharge",
  },
  {
    id: "community",
    icon: "Users",
    titleKey: "community",
    descriptionKey: "communityDesc",
    metric: "1,000+ concessions",
  },
  {
    id: "safety",
    icon: "HardHat",
    titleKey: "safety",
    descriptionKey: "safetyDesc",
    metric: "LiDAR 3D drones",
  },
  {
    id: "education",
    icon: "GraduationCap",
    titleKey: "education",
    descriptionKey: "educationDesc",
    metric: "Local workforce training",
  },
  {
    id: "healthcare",
    icon: "Heart",
    titleKey: "healthcare",
    descriptionKey: "healthcareDesc",
    metric: "Cyanide-free operations",
  },
];
