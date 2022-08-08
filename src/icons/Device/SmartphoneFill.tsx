import React from "react";
import { Icon, IconProps } from "../Icon";

export type SmartphoneFillProps = Omit<IconProps, "name">;

export const SmartphoneFill = (props: SmartphoneFillProps) => (
  <Icon name="smartphone-fill" {...props} />
);
