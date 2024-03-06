import { cn } from "@/lib/utils";
import { BsGithub } from "react-icons/bs";
import { buttonVariants } from "./ui/button";

const MainFooter = () => {
  return (
    <div className="flex flex-col justify-center items-center py-4">
        <p className="text-sm text-muted-foreground">All right reserved to it's corresponding developers.</p>
        <p className="text-sm text-muted-foreground">© 2024 AniFury™ | Made by Siba | flawsom | vibes.him</p>

        <div className="flex items-center gap-x-3">
            <a href="https://github.com/flawsom" target="_blank" className={cn(buttonVariants({ variant: "link" }))}>
               Github <BsGithub className="ml-4" />
            </a>
        </div>
    </div>
  )
}
export default MainFooter