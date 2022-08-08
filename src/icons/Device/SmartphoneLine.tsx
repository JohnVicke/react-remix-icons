import React from "react";
import { Icon, IconProps } from "../Icon";

export type SmartphoneLineProps = Omit<IconProps, "name">;

export const SmartphoneLine = (props: SmartphoneLineProps) => (
  <Icon name="smartphone-line" {...props} />
);
