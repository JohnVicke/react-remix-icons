import React from "react";
import { Icon, IconProps } from "../Icon";

export type TicketFillProps = Omit<IconProps, "name">;

export const TicketFill = (props: TicketFillProps) => (
  <Icon name="ticket-fill" {...props} />
);
