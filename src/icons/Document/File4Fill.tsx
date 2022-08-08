import React from "react";
import { Icon, IconProps } from "../Icon";

export type File4FillProps = Omit<IconProps, "name">;

export const File4Fill = (props: File4FillProps) => (
  <Icon name="file-4-fill" {...props} />
);
