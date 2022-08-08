import React from "react";
import { Icon, IconProps } from "../Icon";

export type DeleteBin7LineProps = Omit<IconProps, "name">;

export const DeleteBin7Line = (props: DeleteBin7LineProps) => (
  <Icon name="delete-bin-7-line" {...props} />
);
