import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Hero({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Scanly</CardTitle>
          <CardDescription className="text-center">
            This is a temporary home page
          </CardDescription>
        <CardContent className="text-center">
          <ModeToggle />
        </CardContent>
        </CardHeader>
      </Card>
    </div>
  )
}