import React from "react";
import { Icon, IconProps } from "../Icon";

export type MessengerLineProps = Omit<IconProps, "name">;

export const MessengerLine = (props: MessengerLineProps) => (
  <Icon name="messenger-line" {...props} />
);
