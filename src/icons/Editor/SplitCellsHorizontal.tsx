import React from "react";
import { Icon, IconProps } from "../Icon";

export type SplitCellsHorizontalProps = Omit<IconProps, "name">;

export const SplitCellsHorizontal = (props: SplitCellsHorizontalProps) => (
  <Icon name="split-cells-horizontal" {...props} />
);
