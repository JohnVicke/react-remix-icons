import React from "react";
import { Icon, IconProps } from "../Icon";

export type Spam3FillProps = Omit<IconProps, "name">;

export const Spam3Fill = (props: Spam3FillProps) => (
  <Icon name="spam-3-fill" {...props} />
);
