import React from "react";
import { Icon, IconProps } from "../Icon";

export type FilePptFillProps = Omit<IconProps, "name">;

export const FilePptFill = (props: FilePptFillProps) => (
  <Icon name="file-ppt-fill" {...props} />
);
