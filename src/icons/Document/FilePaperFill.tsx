import React from "react";
import { Icon, IconProps } from "../Icon";

export type FilePaperFillProps = Omit<IconProps, "name">;

export const FilePaperFill = (props: FilePaperFillProps) => (
  <Icon name="file-paper-fill" {...props} />
);
