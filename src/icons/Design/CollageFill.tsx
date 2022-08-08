import React from "react";
import { Icon, IconProps } from "../Icon";

export type CollageFillProps = Omit<IconProps, "name">;

export const CollageFill = (props: CollageFillProps) => (
  <Icon name="collage-fill" {...props} />
);
