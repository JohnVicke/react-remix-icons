import React from "react";
import { Icon, IconProps } from "../Icon";

export type CropFillProps = Omit<IconProps, "name">;

export const CropFill = (props: CropFillProps) => (
  <Icon name="crop-fill" {...props} />
);
