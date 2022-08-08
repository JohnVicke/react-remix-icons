import React from "react";
import { Icon, IconProps } from "../Icon";

export type ContactsFillProps = Omit<IconProps, "name">;

export const ContactsFill = (props: ContactsFillProps) => (
  <Icon name="contacts-fill" {...props} />
);
