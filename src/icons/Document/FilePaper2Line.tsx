import React from "react";
import { Icon, IconProps } from "../Icon";

export type FilePaper2LineProps = Omit<IconProps, "name">;

export const FilePaper2Line = (props: FilePaper2LineProps) => (
  <Icon name="file-paper-2-line" {...props} />
);
