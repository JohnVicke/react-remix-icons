import React from "react";
import { Icon, IconProps } from "../Icon";

export type AddCircleFillProps = Omit<IconProps, "name">;

export const AddCircleFill = (props: AddCircleFillProps) => (
  <Icon name="add-circle-fill" {...props} />
);
