import React from "react";
import { Icon, IconProps } from "../Icon";

export type PaletteLineProps = Omit<IconProps, "name">;

export const PaletteLine = (props: PaletteLineProps) => (
  <Icon name="palette-line" {...props} />
);
