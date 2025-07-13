import Link from 'next/link';

export default function Landing() {
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-space-y-4 tw-mt-32">
      <h1 className="tw-text-4xl tw-font-bold">Louie</h1>
      <p className="tw-text-lg">Your Strava-synced marathon coach</p>
      <Link href="/onboard" className="tw-bg-dark-primary tw-text-white tw-px-4 tw-py-2 tw-rounded">
        Sign in with Google
      </Link>
    </div>
  );
}
