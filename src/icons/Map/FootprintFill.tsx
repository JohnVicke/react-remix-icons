import React from "react";
import { Icon, IconProps } from "../Icon";

export type FootprintFillProps = Omit<IconProps, "name">;

export const FootprintFill = (props: FootprintFillProps) => (
  <Icon name="footprint-fill" {...props} />
);
