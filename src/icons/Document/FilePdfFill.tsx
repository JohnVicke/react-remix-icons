import React from "react";
import { Icon, IconProps } from "../Icon";

export type FilePdfFillProps = Omit<IconProps, "name">;

export const FilePdfFill = (props: FilePdfFillProps) => (
  <Icon name="file-pdf-fill" {...props} />
);
