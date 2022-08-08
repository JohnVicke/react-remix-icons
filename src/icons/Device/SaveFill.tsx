import React from "react";
import { Icon, IconProps } from "../Icon";

export type SaveFillProps = Omit<IconProps, "name">;

export const SaveFill = (props: SaveFillProps) => (
  <Icon name="save-fill" {...props} />
);
