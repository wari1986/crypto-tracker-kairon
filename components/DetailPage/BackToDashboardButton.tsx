import Link from 'next/link';

const BackToDashboardButton = () => {
  return (
    <div className="text-2xl bold pt-12">
      <Link href="/">
        <a>
          <h1>Back to Dashboard</h1>
        </a>
      </Link>
    </div>
  );
}

export default BackToDashboardButton
