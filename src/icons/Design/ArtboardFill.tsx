import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArtboardFillProps = Omit<IconProps, "name">;

export const ArtboardFill = (props: ArtboardFillProps) => (
  <Icon name="artboard-fill" {...props} />
);
