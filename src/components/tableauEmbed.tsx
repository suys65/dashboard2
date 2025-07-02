// src/components/TableauEmbed.tsx
const TableauEmbed = () => {
  return (
    <div className="dashboard-start">
      <iframe
        src="https://prod-apnortheast-a.online.tableau.com/t/inu_dashboard/views/_17376496637070/22?:origin=card_share_link&:embed=yes&:render=false"
        width="100%"
        height="100%"
        frameBorder={0}
      />
    </div>
  );
};

export default TableauEmbed;
