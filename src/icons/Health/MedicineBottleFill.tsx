import React from "react";
import { Icon, IconProps } from "../Icon";

export type MedicineBottleFillProps = Omit<IconProps, "name">;

export const MedicineBottleFill = (props: MedicineBottleFillProps) => (
  <Icon name="medicine-bottle-fill" {...props} />
);
