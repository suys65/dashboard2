// src/components/TableauEmbed.tsx
const TableauEmbed = () => {
  return (
    <div className="dashboard-start">
      <iframe
        src="http://10.80.86.85:8088/superset/dashboard/p/wBAYjKJQmkl/?standalone=true"
        width="100%"
        height="100%"
        frameBorder={0}
      />
    </div>
  );
};

export default TableauEmbed;
