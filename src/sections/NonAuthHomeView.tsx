import React from 'react';
import Link from 'next/link';

const NonAuthHomeView: React.FC = () => {
  return (
    <div>
      <h1>Vitajte na SnapZoska</h1>
      <p>Prosim zaregistrujte sa pre viacej moznosti.</p>
      <Link href="/auth/prihlasenie">PRIHLASENIE</Link> | <Link href="/auth/registracia">Sign Up</Link>
    </div>
  );
};

export default NonAuthHomeView;
