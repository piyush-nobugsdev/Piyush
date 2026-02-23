export default function TestPage() {
  return (
    <main className="relative min-h-screen overflow-hidden flex items-center justify-center bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(236,72,153,0.15),transparent_40%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.2),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(236,72,153,0.2),transparent_40%)]" />

      {/* Floating Blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-floatSlow" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-floatMedium" />
      <div className="absolute bottom-[-150px] left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-floatReverse" />

      {/* Content */}
      <div className="relative z-10 text-center space-y-6">
        <h1 className="text-5xl font-bold">
          Animated Background Test
        </h1>
        <p className="text-lg opacity-70">
          Testing floating blurred shapes + radial gradient.
        </p>
      </div>

    </main>
  );
}