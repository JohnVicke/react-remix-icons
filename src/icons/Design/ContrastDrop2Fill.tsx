import React from "react";
import { Icon, IconProps } from "../Icon";

export type ContrastDrop2FillProps = Omit<IconProps, "name">;

export const ContrastDrop2Fill = (props: ContrastDrop2FillProps) => (
  <Icon name="contrast-drop-2-fill" {...props} />
);
