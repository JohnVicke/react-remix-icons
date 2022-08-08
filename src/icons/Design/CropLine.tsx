import React from "react";
import { Icon, IconProps } from "../Icon";

export type CropLineProps = Omit<IconProps, "name">;

export const CropLine = (props: CropLineProps) => (
  <Icon name="crop-line" {...props} />
);
