import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "dore-bars",
    titleKey: "dore",
    descriptionKey: "doreDesc",
    specs: [
      { labelKey: "specifications", value: "Non-mercury, cyanide-free" },
      { labelKey: "recoveryRate", value: "90%" },
      { labelKey: "cutOff", value: "0.1 g/t Au" },
    ],
    icon: "BarChart3",
  },
  {
    id: "gold-concentrate",
    titleKey: "concentrate",
    descriptionKey: "concentrateDesc",
    specs: [
      { labelKey: "grade", value: "10 g/t average" },
      { labelKey: "processing", value: "Modern circuits" },
    ],
    icon: "Layers",
  },
  {
    id: "export-services",
    titleKey: "export",
    descriptionKey: "exportDesc",
    specs: [
      { labelKey: "logistics", value: "Secure transport" },
      { labelKey: "compliance", value: "Full regulatory" },
    ],
    icon: "Truck",
  },
  {
    id: "purity-info",
    titleKey: "purity",
    descriptionKey: "purityDesc",
    specs: [
      { labelKey: "recoveryRate", value: "90% at 0.1 g/t" },
      { labelKey: "process", value: "Non-mercury" },
    ],
    icon: "ShieldCheck",
  },
  {
    id: "international-trading",
    titleKey: "trading",
    descriptionKey: "tradingDesc",
    specs: [
      { labelKey: "markets", value: "London, Zurich, Dubai, Singapore" },
    ],
    icon: "Globe",
  },
];
