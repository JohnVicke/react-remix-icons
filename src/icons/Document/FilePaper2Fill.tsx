import React from "react";
import { Icon, IconProps } from "../Icon";

export type FilePaper2FillProps = Omit<IconProps, "name">;

export const FilePaper2Fill = (props: FilePaper2FillProps) => (
  <Icon name="file-paper-2-fill" {...props} />
);
