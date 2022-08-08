import React from "react";
import { Icon, IconProps } from "../Icon";

export type ImageAddLineProps = Omit<IconProps, "name">;

export const ImageAddLine = (props: ImageAddLineProps) => (
  <Icon name="image-add-line" {...props} />
);
