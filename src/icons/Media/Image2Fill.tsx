import React from "react";
import { Icon, IconProps } from "../Icon";

export type Image2FillProps = Omit<IconProps, "name">;

export const Image2Fill = (props: Image2FillProps) => (
  <Icon name="image-2-fill" {...props} />
);
