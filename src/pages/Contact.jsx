
const Contact = () => {
  const handleGitHubClick = () => {
    window.open("https://github.com/dizzy-sam1xp/PASSOP.git", "_blank");
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 via-white to-emerald-50 text-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-12 text-center">
          <p className="mb-3 inline-flex items-center rounded-full border border-green-200 bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
            Let’s connect
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Reach out to the PassOP community
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Whether you want to contribute, ask a question, or share feedback,
            there are a few simple ways to get in touch.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-slate-900 text-xl text-white">
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.042-1.415-4.042-1.415-.546-1.385-1.333-1.754-1.333-1.754-1.089-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.303-5.467-1.334-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.009-.323 3.3 1.23A11.48 11.48 0 0 1 12 5.842c1.021 0 2.049.138 3.006.404 2.29-1.553 3.298-1.23 3.298-1.23.653 1.653.242 2.873.118 3.176.77.84 1.236 1.911 1.236 3.221 0 4.61-2.807 5.624-5.479 5.922.43.37.814 1.098.814 2.214v3.287c0 .319.218.694.825.576C20.566 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">GitHub</h2>
            <p className="mt-3 text-slate-600">
              Explore the project, view the source code, and contribute to the
              next update.
            </p>
            <button
              onClick={handleGitHubClick}
              className="mt-6 w-full rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              Visit repository
            </button>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-2xl text-green-700">
              ✉
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Email</h2>
            <p className="mt-3 text-slate-600">
              Need to ask something directly or start a conversation? Send an
              email and I’ll respond as soon as possible.
            </p>
            <a
              href="mailto:saksham.pawan14@yahoo.com"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-green-600 px-4 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              Send email
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100 text-2xl text-emerald-700">
              💡
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Feedback</h2>
            <p className="mt-3 text-slate-600">
              Found a bug, have a feature idea, or want to improve the
              experience? Share it through GitHub.
            </p>
            <button
              onClick={handleGitHubClick}
              className="mt-6 w-full rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white transition hover:bg-emerald-700"
            >
              Open an issue
            </button>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-green-200 bg-linear-to-r from-green-100 to-emerald-50 p-8 shadow-sm sm:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                Community
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Contribute to PassOP
              </h2>
            </div>
            <button
              onClick={handleGitHubClick}
              className="inline-flex items-center justify-center rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              Contribute on GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
