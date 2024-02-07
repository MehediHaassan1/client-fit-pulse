const SectionTitle = ({ title, subtitle }) => {
    return (
        <div>
            <p className="text-accent text-lg font-bold">{title}</p>
            <h2 className="text-primary text-4xl font-semibold">{subtitle}</h2>
            <div className="w-28 border-b-2 my-5 border-accent"></div>
        </div>
    );
};

export default SectionTitle;
