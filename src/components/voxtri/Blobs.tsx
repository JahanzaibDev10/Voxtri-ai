export function Blobs({ variant = "a" }: { variant?: "a" | "b" | "c" }) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {variant === "a" && (
        <>
          <div className="blob absolute -top-32 -left-20 h-[420px] w-[420px] rounded-full bg-[#5AD2E2]/35 blur-3xl" />
          <div className="blob absolute top-40 -right-32 h-[480px] w-[480px] rounded-full bg-[#DFF6F4]/80 blur-3xl" style={{ animationDelay: "-4s" }} />
        </>
      )}
      {variant === "b" && (
        <>
          <div className="blob absolute -bottom-40 left-1/4 h-[500px] w-[500px] rounded-full bg-[#15B5C4]/25 blur-3xl" />
          <div className="blob absolute top-10 right-10 h-[300px] w-[300px] rounded-full bg-[#EEF9FB] blur-2xl" style={{ animationDelay: "-7s" }} />
        </>
      )}
      {variant === "c" && (
        <div className="blob absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5AD2E2]/20 blur-3xl" />
      )}
    </div>
  );
}
