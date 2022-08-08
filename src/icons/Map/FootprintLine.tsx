import React from "react";
import { Icon, IconProps } from "../Icon";

export type FootprintLineProps = Omit<IconProps, "name">;

export const FootprintLine = (props: FootprintLineProps) => (
  <Icon name="footprint-line" {...props} />
);
