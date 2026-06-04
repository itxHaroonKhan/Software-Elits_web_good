import AnimatedTextCycle from "@/components/ui/animated-text-cycle"

export function AnimatedTextCycleDemo() {
  return (
    <div className="p-8 max-w-[900px]">
        <h1 className="text-5xl md:text-7xl font-light text-left text-zinc-500">
            Your <AnimatedTextCycle 
                words={[
                    "business",
                    "team",
                    "workflow",
                    "productivity",
                    "projects",
                    "analytics",
                    "dashboard",
                    "platform"
                ]}
                interval={3000}
                className={"text-white font-semibold"} 
            /> deserves better tools
        </h1>
    </div>
  );
}
