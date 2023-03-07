const Section = ({
  children,
  justifyProp = 'center',
}: {
  children: React.ReactNode;
  justifyProp?: string;
}) => {
  return (
    <section
      className={`w-full px-10 py-6 pt-16 pb-16 flex justify-${justifyProp}`}
    >
      {children}
    </section>
  );
};
export default Section;
