export type PurpleRole =
  | "purple_member"
  | "purple_talent"
  | "purple_agent"
  | "purple_organization"
  | "purple_admin";

export type PurpleProfileStatus =
  | "pending"
  | "active"
  | "suspended"
  | "archived";

export interface PurpleProfile {
  id: string;

  accountId: string;

  role: PurpleRole;

  status: PurpleProfileStatus;

  displayName: string;

  headline?: string;

  avatarUrl?: string;

  organizationId?: string;

  createdAt: Date;

  updatedAt: Date;
}
