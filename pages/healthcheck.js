// pages/healthcheck.js
export default function HealthCheck() {
  return (
    <div style={{ padding: 24, fontFamily: 'Inter, system-ui, sans-serif' }}>
      <h1>✅ Healthcheck OK</h1>
      <p>Next.js répond — la page /healthcheck fonctionne.</p>
      <p>Timestamp: {new Date().toISOString()}</p>
    </div>
  );
}