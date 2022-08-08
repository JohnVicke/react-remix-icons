import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArtboardLineProps = Omit<IconProps, "name">;

export const ArtboardLine = (props: ArtboardLineProps) => (
  <Icon name="artboard-line" {...props} />
);
