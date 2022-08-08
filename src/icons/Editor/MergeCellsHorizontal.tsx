import React from "react";
import { Icon, IconProps } from "../Icon";

export type MergeCellsHorizontalProps = Omit<IconProps, "name">;

export const MergeCellsHorizontal = (props: MergeCellsHorizontalProps) => (
  <Icon name="merge-cells-horizontal" {...props} />
);
