import React from "react";
import { Icon, IconProps } from "../Icon";

export type AirplayLineProps = Omit<IconProps, "name">;

export const AirplayLine = (props: AirplayLineProps) => (
  <Icon name="airplay-line" {...props} />
);
