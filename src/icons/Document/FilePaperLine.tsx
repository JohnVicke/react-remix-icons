import React from "react";
import { Icon, IconProps } from "../Icon";

export type FilePaperLineProps = Omit<IconProps, "name">;

export const FilePaperLine = (props: FilePaperLineProps) => (
  <Icon name="file-paper-line" {...props} />
);
