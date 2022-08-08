import React from "react";
import { Icon, IconProps } from "../Icon";

export type File2FillProps = Omit<IconProps, "name">;

export const File2Fill = (props: File2FillProps) => (
  <Icon name="file-2-fill" {...props} />
);
