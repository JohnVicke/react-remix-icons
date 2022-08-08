import React from "react";
import { Icon, IconProps } from "../Icon";

export type MergeCellsVerticalProps = Omit<IconProps, "name">;

export const MergeCellsVertical = (props: MergeCellsVerticalProps) => (
  <Icon name="merge-cells-vertical" {...props} />
);
