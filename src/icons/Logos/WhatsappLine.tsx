import React from "react";
import { Icon, IconProps } from "../Icon";

export type WhatsappLineProps = Omit<IconProps, "name">;

export const WhatsappLine = (props: WhatsappLineProps) => (
  <Icon name="whatsapp-line" {...props} />
);
