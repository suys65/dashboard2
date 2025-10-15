// src/components/SupersetEmbed.tsx
const SupersetEmbed = () => {
  return (
    <div className="dashboard-start">
      <iframe
        src="http://10.80.86.78:8088/superset/dashboard/p/kQE0ebr2KZm/?standalone=1"
        width="100%"
        height="100%"
        frameBorder={0}
        title="Superset Dashboard"
      />
    </div>
  );
};

export default SupersetEmbed;
