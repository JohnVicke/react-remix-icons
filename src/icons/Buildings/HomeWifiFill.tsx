import React from "react";
import { Icon, IconProps } from "../Icon";

export type HomeWifiFillProps = Omit<IconProps, "name">;

export const HomeWifiFill = (props: HomeWifiFillProps) => (
  <Icon name="home-wifi-fill" {...props} />
);
