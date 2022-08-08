import React from "react";
import { Icon, IconProps } from "../Icon";

export type ImageLineProps = Omit<IconProps, "name">;

export const ImageLine = (props: ImageLineProps) => (
  <Icon name="image-line" {...props} />
);
