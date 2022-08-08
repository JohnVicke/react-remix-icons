import React from "react";
import { Icon, IconProps } from "../Icon";

export type EditLineProps = Omit<IconProps, "name">;

export const EditLine = (props: EditLineProps) => (
  <Icon name="edit-line" {...props} />
);
