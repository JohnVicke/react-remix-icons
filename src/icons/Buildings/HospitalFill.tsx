import React from "react";
import { Icon, IconProps } from "../Icon";

export type HospitalFillProps = Omit<IconProps, "name">;

export const HospitalFill = (props: HospitalFillProps) => (
  <Icon name="hospital-fill" {...props} />
);
