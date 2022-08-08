import React from "react";
import { Icon, IconProps } from "../Icon";

export type DeleteBack2FillProps = Omit<IconProps, "name">;

export const DeleteBack2Fill = (props: DeleteBack2FillProps) => (
  <Icon name="delete-back-2-fill" {...props} />
);
