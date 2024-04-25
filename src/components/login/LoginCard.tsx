import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function LoginCard() {
  return (
    <Card className="w-[40vw] shadow-md rounded-3xl p-8">
      <CardHeader>
        <CardTitle className="text-4xl text-purple-800 font-bold">
          Login to Play
        </CardTitle>
        <CardDescription>are you first come this website?</CardDescription>
      </CardHeader>
      <CardContent className="">
        <p className="mb-2">Hey! Happy to see you!</p>
      </CardContent>
      <CardFooter className="flex flex-col gap-5">
        <LoginLink>
          <Button
            className="w-[20vw] text-lg rounded-full hover:scale-105 transition"
            size={"lg"}
            variant={"default"}
          >
            Log in
          </Button>
        </LoginLink>
        <RegisterLink>
          <Button
            className="w-[20vw] text-lg rounded-full hover:scale-105 transition"
            size={"lg"}
            variant={"default"}
          >
            Sign up
          </Button>
        </RegisterLink>
      </CardFooter>
      <LogoutLink>
        <Button variant={'secondary'} size={'sm'} className="rounded-full">logout</Button>
      </LogoutLink>
      <div className="mt-5">power by Kinde.</div>
    </Card>
  );
}
