import React from "react";
import { Icon, IconProps } from "../Icon";

export type PaletteFillProps = Omit<IconProps, "name">;

export const PaletteFill = (props: PaletteFillProps) => (
  <Icon name="palette-fill" {...props} />
);
