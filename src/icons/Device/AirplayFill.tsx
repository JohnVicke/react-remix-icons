import React from "react";
import { Icon, IconProps } from "../Icon";

export type AirplayFillProps = Omit<IconProps, "name">;

export const AirplayFill = (props: AirplayFillProps) => (
  <Icon name="airplay-fill" {...props} />
);
