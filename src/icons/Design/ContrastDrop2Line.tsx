import React from "react";
import { Icon, IconProps } from "../Icon";

export type ContrastDrop2LineProps = Omit<IconProps, "name">;

export const ContrastDrop2Line = (props: ContrastDrop2LineProps) => (
  <Icon name="contrast-drop-2-line" {...props} />
);
