import React from "react";
import { Icon, IconProps } from "../Icon";

export type EditBoxFillProps = Omit<IconProps, "name">;

export const EditBoxFill = (props: EditBoxFillProps) => (
  <Icon name="edit-box-fill" {...props} />
);
