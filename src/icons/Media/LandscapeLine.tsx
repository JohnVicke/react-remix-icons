import React from "react";
import { Icon, IconProps } from "../Icon";

export type LandscapeLineProps = Omit<IconProps, "name">;

export const LandscapeLine = (props: LandscapeLineProps) => (
  <Icon name="landscape-line" {...props} />
);
