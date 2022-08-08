import React from "react";
import { Icon, IconProps } from "../Icon";

export type Ticket2FillProps = Omit<IconProps, "name">;

export const Ticket2Fill = (props: Ticket2FillProps) => (
  <Icon name="ticket-2-fill" {...props} />
);
