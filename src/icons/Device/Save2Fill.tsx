import React from "react";
import { Icon, IconProps } from "../Icon";

export type Save2FillProps = Omit<IconProps, "name">;

export const Save2Fill = (props: Save2FillProps) => (
  <Icon name="save-2-fill" {...props} />
);
