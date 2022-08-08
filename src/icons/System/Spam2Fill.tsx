import React from "react";
import { Icon, IconProps } from "../Icon";

export type Spam2FillProps = Omit<IconProps, "name">;

export const Spam2Fill = (props: Spam2FillProps) => (
  <Icon name="spam-2-fill" {...props} />
);
