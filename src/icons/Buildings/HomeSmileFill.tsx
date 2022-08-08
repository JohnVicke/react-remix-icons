import React from "react";
import { Icon, IconProps } from "../Icon";

export type HomeSmileFillProps = Omit<IconProps, "name">;

export const HomeSmileFill = (props: HomeSmileFillProps) => (
  <Icon name="home-smile-fill" {...props} />
);
