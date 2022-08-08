import React from "react";
import { Icon, IconProps } from "../Icon";

export type LayoutMasonryLineProps = Omit<IconProps, "name">;

export const LayoutMasonryLine = (props: LayoutMasonryLineProps) => (
  <Icon name="layout-masonry-line" {...props} />
);
