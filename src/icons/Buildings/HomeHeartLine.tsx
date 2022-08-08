import React from "react";
import { Icon, IconProps } from "../Icon";

export type HomeHeartLineProps = Omit<IconProps, "name">;

export const HomeHeartLine = (props: HomeHeartLineProps) => (
  <Icon name="home-heart-line" {...props} />
);
