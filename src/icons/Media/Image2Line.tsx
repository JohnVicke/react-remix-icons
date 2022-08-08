import React from "react";
import { Icon, IconProps } from "../Icon";

export type Image2LineProps = Omit<IconProps, "name">;

export const Image2Line = (props: Image2LineProps) => (
  <Icon name="image-2-line" {...props} />
);
