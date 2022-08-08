import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileAddFillProps = Omit<IconProps, "name">;

export const FileAddFill = (props: FileAddFillProps) => (
  <Icon name="file-add-fill" {...props} />
);
