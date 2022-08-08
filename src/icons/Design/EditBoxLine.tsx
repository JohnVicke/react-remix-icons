import React from "react";
import { Icon, IconProps } from "../Icon";

export type EditBoxLineProps = Omit<IconProps, "name">;

export const EditBoxLine = (props: EditBoxLineProps) => (
  <Icon name="edit-box-line" {...props} />
);
