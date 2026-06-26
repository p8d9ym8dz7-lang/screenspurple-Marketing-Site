import type { PurpleProfile, PurpleProfileStatus, PurpleRole } from "./types";

export class PurpleProfileEntity implements PurpleProfile {
  constructor(
    public id: string,
    public accountId: string,
    public role: PurpleRole = "purple_member",
    public status: PurpleProfileStatus = "pending",
    public displayName: string = "",
    public headline?: string,
    public avatarUrl?: string,
    public organizationId?: string,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
  ) {}
}
