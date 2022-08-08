import React from "react";
import { Icon, IconProps } from "../Icon";

export type HomeGearLineProps = Omit<IconProps, "name">;

export const HomeGearLine = (props: HomeGearLineProps) => (
  <Icon name="home-gear-line" {...props} />
);
