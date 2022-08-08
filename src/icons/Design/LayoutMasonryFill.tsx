import React from "react";
import { Icon, IconProps } from "../Icon";

export type LayoutMasonryFillProps = Omit<IconProps, "name">;

export const LayoutMasonryFill = (props: LayoutMasonryFillProps) => (
  <Icon name="layout-masonry-fill" {...props} />
);
