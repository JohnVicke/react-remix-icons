import React from "react";
import { Icon, IconProps } from "../Icon";

export type MedicineBottleLineProps = Omit<IconProps, "name">;

export const MedicineBottleLine = (props: MedicineBottleLineProps) => (
  <Icon name="medicine-bottle-line" {...props} />
);
