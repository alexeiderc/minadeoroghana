import { MetricItem } from "@/types";

export interface Metric {
  value: number;
  suffix: string;
  labelKey: string;
  decimals?: number;
}

export const metrics: Metric[] = [
  { value: 10, suffix: " g/t", labelKey: "annual", decimals: 1 },
  { value: 405, suffix: " ha", labelKey: "ore", decimals: 0 },
  { value: 90, suffix: "%", labelKey: "recovery", decimals: 0 },
  { value: 1000, suffix: "+", labelKey: "employees", decimals: 0 },
  { value: 4069, suffix: " USD", labelKey: "markets", decimals: 0 },
];
