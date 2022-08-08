import React from "react";
import { Icon, IconProps } from "../Icon";

export type File3FillProps = Omit<IconProps, "name">;

export const File3Fill = (props: File3FillProps) => (
  <Icon name="file-3-fill" {...props} />
);
