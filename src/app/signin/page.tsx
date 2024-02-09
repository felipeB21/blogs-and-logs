import { AuthGithubServer } from "@/components/auth-githbub-server";

export default function page() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <AuthGithubServer />
    </div>
  );
}
