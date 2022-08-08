import React from "react";
import { Icon, IconProps } from "../Icon";

export type WhatsappFillProps = Omit<IconProps, "name">;

export const WhatsappFill = (props: WhatsappFillProps) => (
  <Icon name="whatsapp-fill" {...props} />
);
