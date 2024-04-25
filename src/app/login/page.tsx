import LoginCard from "@/components/login/LoginCard"
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper"

export default function LoginPage() {
  return (
    <MaxWidthWrapper className="h-[90vh] flex justify-center items-center">
      <LoginCard />
    </MaxWidthWrapper>
  )
}