import React from "react";
import { Icon, IconProps } from "../Icon";

export type HomeLineProps = Omit<IconProps, "name">;

export const HomeLine = (props: HomeLineProps) => (
  <Icon name="home-line" {...props} />
);
