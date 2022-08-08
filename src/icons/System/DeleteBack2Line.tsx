import React from "react";
import { Icon, IconProps } from "../Icon";

export type DeleteBack2LineProps = Omit<IconProps, "name">;

export const DeleteBack2Line = (props: DeleteBack2LineProps) => (
  <Icon name="delete-back-2-line" {...props} />
);
