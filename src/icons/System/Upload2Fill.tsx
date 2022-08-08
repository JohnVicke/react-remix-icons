import React from "react";
import { Icon, IconProps } from "../Icon";

export type Upload2FillProps = Omit<IconProps, "name">;

export const Upload2Fill = (props: Upload2FillProps) => (
  <Icon name="upload-2-fill" {...props} />
);
