export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem' }}>Match-A-Maid Namibia</h1>
          <p style={{ color: '#555' }}>Connecting trusted housekeepers with homes & businesses across Namibia</p>
        </header>

        <section style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
          <div style={{ flex: 1, padding: '1rem', border: '1px solid #ddd', borderRadius: '12px' }}>
            <h2>Need a Housekeeper?</h2>
            <p>Post your job details and let us connect you with reliable, verified housekeepers.</p>
            <a href="https://forms.gle/your-employer-form-link" target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#2563eb', color: '#fff', borderRadius: '8px', textDecoration: 'none' }}>
              Post a Job
            </a>
          </div>

          <div style={{ flex: 1, padding: '1rem', border: '1px solid #ddd', borderRadius: '12px' }}>
            <h2>Looking for Work?</h2>
            <p>Apply to be matched with cleaning jobs in your area. Start earning today!</p>
            <a href="https://forms.gle/your-housekeeper-form-link" target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#16a34a', color: '#fff', borderRadius: '8px', textDecoration: 'none' }}>
              Apply for a Job
            </a>
          </div>
        </section>

        <section style={{ textAlign: 'center' }}>
          <h3>How It Works</h3>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: '#666' }}>
            We collect job and applicant info, match them based on location, availability and skills, then notify both parties. Once a match is made, each party pays a small fee for the connection. It’s simple, fast and effective.
          </p>
        </section>

        <footer style={{ textAlign: 'center', marginTop: '3rem', color: '#999' }}>
          &copy; {new Date().getFullYear()} Match-A-Maid Namibia. All rights reserved.
        </footer>
      </div>
    </main>
  );
}