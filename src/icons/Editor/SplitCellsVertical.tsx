import React from "react";
import { Icon, IconProps } from "../Icon";

export type SplitCellsVerticalProps = Omit<IconProps, "name">;

export const SplitCellsVertical = (props: SplitCellsVerticalProps) => (
  <Icon name="split-cells-vertical" {...props} />
);
