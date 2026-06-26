export const avatarPassConfig = {
  authUrl: process.env.NEXT_PUBLIC_AUTH_API_URL || "https://auth.avatarpass.ai",
  clientId: process.env.NEXT_PUBLIC_AVATARPASS_CLIENT_ID || "screenspurple-talent",
  redirectUri:
    process.env.NEXT_PUBLIC_AVATARPASS_REDIRECT_URI ||
    "http://localhost:3000/auth/callback",
};

export function getAvatarPassLoginUrl() {
  const params = new URLSearchParams({
    client_id: avatarPassConfig.clientId,
    redirect_uri: avatarPassConfig.redirectUri,
    response_type: "code",
    scope: "openid profile email",
  });

  return `${avatarPassConfig.authUrl}/oauth/authorize?${params.toString()}`;
}
