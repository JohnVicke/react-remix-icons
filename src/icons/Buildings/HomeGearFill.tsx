import React from "react";
import { Icon, IconProps } from "../Icon";

export type HomeGearFillProps = Omit<IconProps, "name">;

export const HomeGearFill = (props: HomeGearFillProps) => (
  <Icon name="home-gear-fill" {...props} />
);
