import React from "react";
import { Icon, IconProps } from "../Icon";

export type HomeHeartFillProps = Omit<IconProps, "name">;

export const HomeHeartFill = (props: HomeHeartFillProps) => (
  <Icon name="home-heart-fill" {...props} />
);
