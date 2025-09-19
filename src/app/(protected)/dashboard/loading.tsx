import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { AuroraBackground } from "@/components/ui/aurora-background";

const Loading = () => {
  return (
    <AuroraBackground>
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-center">
          <Loader2
            className={cn(
              "h-8 w-8 animate-spin text-primary",
              "transition-colors duration-200"
            )}
          />
          <div className="space-y-1">
            <p className="text-sm font-bold text-foreground">
              Cargando Dashboard
            </p>
            <p className="text-xs text-muted-foreground font-medium">
              Preparando tu workspace
            </p>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
};

export default Loading;
