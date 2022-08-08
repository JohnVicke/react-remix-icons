import React from "react";
import { Icon, IconProps } from "../Icon";

export type EditCircleFillProps = Omit<IconProps, "name">;

export const EditCircleFill = (props: EditCircleFillProps) => (
  <Icon name="edit-circle-fill" {...props} />
);
