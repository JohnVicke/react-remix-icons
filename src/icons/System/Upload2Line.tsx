import React from "react";
import { Icon, IconProps } from "../Icon";

export type Upload2LineProps = Omit<IconProps, "name">;

export const Upload2Line = (props: Upload2LineProps) => (
  <Icon name="upload-2-line" {...props} />
);
