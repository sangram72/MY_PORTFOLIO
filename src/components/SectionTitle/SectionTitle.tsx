interface SectionTitleProps {
  eyebrow: string;
  title: string;
}

const SectionTitle = ({
  eyebrow,
  title,
}: SectionTitleProps) => {
  return (
    <div className="mb-12">
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-500">
        {eyebrow}
      </p>

      <h2 className="text-4xl font-bold text-white sm:text-5xl">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;