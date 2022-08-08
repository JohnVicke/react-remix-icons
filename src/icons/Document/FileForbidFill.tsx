import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileForbidFillProps = Omit<IconProps, "name">;

export const FileForbidFill = (props: FileForbidFillProps) => (
  <Icon name="file-forbid-fill" {...props} />
);
