import React from "react";
import { Icon, IconProps } from "../Icon";

export type SaveLineProps = Omit<IconProps, "name">;

export const SaveLine = (props: SaveLineProps) => (
  <Icon name="save-line" {...props} />
);
