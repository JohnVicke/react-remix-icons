import React from "react";
import { Icon, IconProps } from "../Icon";

export type HomeSmileLineProps = Omit<IconProps, "name">;

export const HomeSmileLine = (props: HomeSmileLineProps) => (
  <Icon name="home-smile-line" {...props} />
);
